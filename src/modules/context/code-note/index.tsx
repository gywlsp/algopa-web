import {
  convertFromRaw,
  convertToRaw,
  EditorState,
  Modifier,
  RawDraftContentState,
  RichUtils,
} from 'draft-js';
import Prism from 'prismjs';
import PrimsDecorator from 'draft-js-prism';
import { useState, useContext, createContext, useEffect, useRef } from 'react';
import { useRecoilValue } from 'recoil';
import { CodeNoteSectionProps } from 'src/components/problem-detail/section/note';

import { DRAFT_INLINE_STYLES } from 'src/data/note';
import { ICodeNoteContext } from './ICodeNoteContext';
import CodeService from 'src/services/api/code';
import { selectedProblemCodeId } from 'src/modules/atoms/code';
import { selectedProblemCode } from 'src/modules/selectors/code';
import { useNote } from 'src/hooks/api/note';

const CodeNoteContext = createContext<ICodeNoteContext>(undefined);

export const useCodeNoteContext = () => useContext(CodeNoteContext);

export const withCodeNoteContext =
  (WrappedComponent: React.FunctionComponent<any>) =>
  (props: CodeNoteSectionProps) => {
    const editorRef = useRef(null);
    const decorator = new PrimsDecorator({ prism: Prism });
    const selectedCodeId = useRecoilValue(selectedProblemCodeId);
    const selectedCode = useRecoilValue(selectedProblemCode);
    const { data: note } = useNote(selectedCodeId);
    const [editorState, setEditorState] = useState(() =>
      EditorState.createEmpty(decorator)
    );
    const [isEditing, setEditing] = useState(false);
    const [noteType, setNoteType] = useState<'submitted' | 'tempSaved'>(
      'submitted'
    );
    const [title, setTitle] = useState('');
    const [rawContent, setRawContent] = useState<RawDraftContentState>();

    useEffect(() => {
      if (note && note[noteType]) {
        const { title, content: rawContent } = note[noteType];
        setTitle(title);
        setRawContent(rawContent);
        setEditorState(convertToEditorState(rawContent));
      } else {
        setTitle('');
        setRawContent(null);
        setEditorState(EditorState.createEmpty(decorator));
      }
    }, [JSON.stringify(note && note[noteType]), isEditing]);

    useEffect(() => {
      setEditing(false);
    }, [selectedCodeId]);

    const convertToEditorState = (rawContent: RawDraftContentState) => {
      const content = convertFromRaw(rawContent);
      return EditorState.createWithContent(content, decorator);
    };

    const getEditorData = (editor = editorState) => {
      const content = editor.getCurrentContent();
      const selection = editor.getSelection();
      const blockKey = selection?.getStartKey();
      const block = editor?.getCurrentContent()?.getBlockForKey(blockKey);
      return { content, selection, blockKey, block };
    };

    const handleEditStart = () => {
      if (note?.tempSaved && confirm('임시저장된 내용을 불러오시겠습니까?')) {
        setNoteType('tempSaved');
      } else if (note?.submitted) {
        setNoteType('submitted');
      }
      setEditing(true);
    };

    const handleEditCancel = () => {
      setEditing(false);
      setNoteType('submitted');
    };

    const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setTitle(e.target.value);
    };

    const handleNoteDelete = async () => {
      if (!confirm('풀이 노트를 삭제하시겠습니까?')) {
        return;
      }
      try {
        await CodeService.deleteNote(selectedCodeId);
        alert('풀이 노트가 삭제되었습니다.');
      } catch (err) {
        alert('풀이 노트 삭제에 실패하였습니다.');
      }
    };

    const handleEditorStateChange = (newEditorState: EditorState) => {
      setEditorState(newEditorState);
      setRawContent(convertToRaw(newEditorState.getCurrentContent()));
    };

    const handleTab = (e: any) => {
      e.preventDefault();
      const tabCharacter = '    ';
      const { content, selection } = getEditorData();
      const newEditorState = Modifier.replaceText(
        content,
        selection,
        tabCharacter
      );
      setEditorState(
        EditorState.push(editorState, newEditorState, 'insert-characters')
      );
    };

    const getSyntaxDataAddedEditor = (editor = editorState) => {
      const { content, selection, block } = getEditorData(editor);
      const newData = block.getData().merge({ syntax: selectedCode?.language });
      const newContent = Modifier.setBlockData(content, selection, newData);
      const newEditor = EditorState.push(
        editor,
        newContent,
        'change-block-data'
      );
      return newEditor;
    };

    const toggleEditorStyle = (value: string, editor = editorState) => {
      const isInlineStyle = DRAFT_INLINE_STYLES.includes(value);
      const toggleStyle = isInlineStyle
        ? RichUtils.toggleInlineStyle
        : RichUtils.toggleBlockType;
      const newEditorState = toggleStyle(
        value === 'code-block' ? getSyntaxDataAddedEditor(editor) : editor,
        value
      );
      setEditorState(newEditorState);
      return newEditorState;
    };

    const handleEditSave = async () => {
      if (!title && !rawContent) {
        alert('제목이나 내용을 입력해주세요.');
        return;
      }
      try {
        await CodeService.updateNote(selectedCodeId, {
          tempSaved: {
            title,
            content: rawContent,
          },
        });
        alert('풀이 노트 변경 내역이 임시저장되었습니다.');
      } catch (err) {
        alert('풀이 노트 변경 내역 임시저장에 실패하였습니다.');
      }
    };

    const handleEditSubmit = async () => {
      if (!title) {
        alert('제목을 입력해주세요.');
        return;
      }
      if (!rawContent) {
        alert('내용을 입력해주세요.');
        return;
      }
      try {
        await CodeService.updateNote(selectedCodeId, {
          submitted: {
            title,
            content: rawContent,
          },
        });
        alert('풀이 노트 변경 내역이 저장되었습니다.');
        setEditing(false);
      } catch (err) {
        alert('풀이 노트 변경 내역 저장에 실패하였습니다.');
      }
    };

    const focusEditor = () => {
      editorRef?.current?.focus();
    };

    const insertEventIndexData = (index: string, modifiedText: string) => {
      const selectionState = editorState.getSelection();
      const indexInsertedEditorState = insertText({
        editorState,
        text: `${selectedCode?.language === 'python' ? '#' : '//'} ${index}\n`,
      });
      const codeTextInsertedEditorState = insertText({
        editorState: indexInsertedEditorState,
        text: modifiedText + '\n',
      });
      const styledEditorState = RichUtils.toggleBlockType(
        codeTextInsertedEditorState,
        'code-block'
      );
      const codeTextSelectedEditorState = EditorState.forceSelection(
        styledEditorState,
        selectionState
      );
      handleEditorStateChange(codeTextSelectedEditorState);
    };

    const insertText = ({ editorState, text }) => {
      const contentState = editorState.getCurrentContent();
      const selectionState = editorState.getSelection();

      const newContentState = Modifier.insertText(
        contentState,
        selectionState,
        text
      );
      const newEditorState = EditorState.createWithContent(newContentState);
      const newSelectionState = selectionState.merge({
        anchorOffset: text.length,
        focusOffset: text.length,
      });
      const newSelectedEditorState = EditorState.forceSelection(
        newEditorState,
        newSelectionState
      );
      return newSelectedEditorState;
    };

    const codeNoteStore = {
      state: { note, isEditing, editorRef, editorState, title, rawContent },
      action: {
        onEditStart: handleEditStart,
        onEditCancel: handleEditCancel,
        onTitleChange: handleTitleChange,
        onEditorStateChange: handleEditorStateChange,
        onTab: handleTab,
        toggleEditorStyle,
        onEditSave: handleEditSave,
        onEditSubmit: handleEditSubmit,
        onNoteDelete: handleNoteDelete,
        focusEditor,
        insertEventIndexData,
      },
    };

    return (
      <CodeNoteContext.Provider value={codeNoteStore}>
        <WrappedComponent {...props} />
      </CodeNoteContext.Provider>
    );
  };
