import {
  useState,
  useContext,
  createContext,
  useEffect,
  useRef,
  useCallback,
} from 'react';
import { useRecoilValue } from 'recoil';
import { CodeNoteSectionProps } from 'src/components/problem-detail/section/code/note';

import { DRAFT_INLINE_STYLES } from 'src/data/note';
import { ICodeNoteContext } from './ICodeNoteContext';
import CodeService from 'src/services/api/code';
import { CodeSectionType } from 'src/modules/atoms/problem';
import { selectedProblemCodeId } from 'src/modules/atoms/code';
import { selectedProblemCode } from 'src/modules/selectors/code';
import { useNote } from 'src/hooks/note';
import {
  convertFromRaw,
  convertToRaw,
  EditorState,
  Modifier,
  RawDraftContentState,
  RichUtils,
} from 'draft-js';
import PrimsDecorator from 'draft-js-prism';
import Prism from 'prismjs';
import 'prismjs/components/prism-python';
Prism.languages.python = Prism.languages.extend('python', {});
Prism.languages.insertBefore('python', 'prolog', {
  comment: { pattern: /##[^\n]*/, alias: 'comment' },
});

const CodeNoteContext = createContext<ICodeNoteContext>(undefined);

export const useCodeNoteContext = () => useContext(CodeNoteContext);

export const withCodeNoteContext =
  (WrappedComponent: React.FunctionComponent<any>) =>
  (props: CodeNoteSectionProps) => {
    const editorRef = useRef(null);
    const codeHighlighter = new PrimsDecorator({ prism: Prism });
    const codeSectionType = useRecoilValue(CodeSectionType);
    const selectedCodeId = useRecoilValue(selectedProblemCodeId);
    const selectedCode = useRecoilValue(selectedProblemCode);
    const { data: note } = useNote(selectedCodeId);
    const [editorState, setEditorState] = useState(() =>
      EditorState.createEmpty(codeHighlighter)
    );
    const [isEditing, setEditing] = useState(false);
    const [noteType, setNoteType] = useState<'submitted' | 'tempSaved'>(
      'submitted'
    );
    const [title, setTitle] = useState('');
    const content = editorState?.getCurrentContent();
    const rawContent = content && convertToRaw(content);

    useEffect(() => {
      if (note && note[noteType]) {
        const { title, content } = note[noteType];
        initEditor(title, content);
      } else {
        resetEditor();
      }
    }, [JSON.stringify(note && note[noteType])]);

    useEffect(() => {
      setEditing(false);
    }, [selectedCodeId, codeSectionType]);

    const initEditor = (title: string, rawContent: RawDraftContentState) => {
      setTitle(title);
      setEditorState(convertToEditorState(rawContent));
    };

    const resetEditor = () => {
      setTitle('');
      setEditorState(EditorState.createEmpty(codeHighlighter));
    };

    const convertToEditorState = (rawContent: RawDraftContentState) => {
      const content = convertFromRaw(rawContent);
      return EditorState.createWithContent(content, codeHighlighter);
    };

    const getEditorData = (_editorState = editorState) => {
      const content = _editorState.getCurrentContent();
      const selection = _editorState.getSelection();
      const blockKey = selection?.getAnchorKey();
      const block = content?.getBlockForKey(blockKey);
      return { content, selection, blockKey, block };
    };

    const handleEditStart = useCallback(() => {
      if (note?.tempSaved && confirm('??????????????? ????????? ?????????????????????????')) {
        setNoteType('tempSaved');
      } else if (note?.submitted) {
        setNoteType('submitted');
      }
      setEditing(true);
    }, [note]);

    const handleEditCancel = useCallback(() => {
      setEditing(false);
      setNoteType('submitted');
    }, []);

    const handleTitleChange = useCallback(
      (e: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value);
      },
      []
    );

    const handleNoteDelete = useCallback(async () => {
      if (!confirm('?????? ????????? ?????????????????????????')) {
        return;
      }
      try {
        await CodeService.deleteNote(selectedCodeId);
        alert('?????? ????????? ?????????????????????.');
      } catch (err) {
        alert('?????? ?????? ????????? ?????????????????????.');
      }
    }, [selectedCodeId]);

    const handleEditorStateChange = useCallback(
      (newEditorState: EditorState) => {
        setEditorState(newEditorState);
      },
      []
    );

    const handleTab = (_editorState = editorState) => {
      const tabCharacter = '        ';
      const { content, selection } = getEditorData(_editorState);
      const newContent = Modifier.replaceText(content, selection, tabCharacter);
      handleEditorStateChange(
        EditorState.push(editorState, newContent, 'insert-characters')
      );
    };

    const addCodeSyntax = (_editorState = editorState) => {
      const { content, selection, block } = getEditorData(_editorState);
      const newData = block.getData().merge({ syntax: selectedCode?.language });
      const newContent = Modifier.setBlockData(content, selection, newData);
      const newEditorState = EditorState.push(
        _editorState,
        newContent,
        'change-block-data'
      );
      return newEditorState;
    };

    const toggleEditorStyle = (value: string, _editorState = editorState) => {
      const isInlineStyle = DRAFT_INLINE_STYLES.includes(value);
      const toggleStyle = isInlineStyle
        ? RichUtils.toggleInlineStyle
        : RichUtils.toggleBlockType;
      const newEditorState = toggleStyle(
        value === 'code-block' ? addCodeSyntax(_editorState) : _editorState,
        value
      );
      handleEditorStateChange(newEditorState);
      return newEditorState;
    };

    const isNoteValid = () => {
      if (!title) {
        alert('????????? ??????????????????.');
        return false;
      }
      if (!rawContent) {
        alert('????????? ??????????????????.');
        return false;
      }
      return true;
    };

    const handleEditSave = useCallback(async () => {
      if (!isNoteValid()) {
        return;
      }
      try {
        await CodeService.updateNote(selectedCodeId, {
          tempSaved: {
            title,
            content: rawContent,
          },
        });
        alert('?????? ?????? ?????? ????????? ???????????????????????????.');
      } catch (err) {
        alert('?????? ?????? ?????? ?????? ??????????????? ?????????????????????.');
      }
    }, [title, rawContent, selectedCodeId]);

    const handleEditSubmit = async () => {
      if (!isNoteValid()) {
        return;
      }
      try {
        await CodeService.updateNote(selectedCodeId, {
          submitted: {
            title,
            content: rawContent,
          },
        });
        alert('?????? ?????? ?????? ????????? ?????????????????????.');
        setEditing(false);
      } catch (err) {
        alert('?????? ?????? ?????? ?????? ????????? ?????????????????????.');
      }
    };

    const focusEditor = () => {
      editorRef?.current?.focus();
    };

    const insertCodeBlock = ({ editorState, data }) => {
      const { content, selection } = getEditorData(editorState);
      const prevAnchorOffset = selection.getAnchorOffset();
      const prevFocusOffset = selection.getFocusOffset();

      const newEditorState = EditorState.createWithContent(
        Modifier.insertText(content, selection, data),
        codeHighlighter
      );
      const newSelection = selection.merge({
        anchorOffset: prevAnchorOffset + data.length,
        focusOffset: prevFocusOffset + data.length,
      });
      const newSelectedEditorState = RichUtils.insertSoftNewline(
        EditorState.forceSelection(newEditorState, newSelection)
      );
      toggleEditorStyle('code-block', newSelectedEditorState);
    };

    const insertEventIndexData = (index: string, codeText: string) => {
      const indexData = `${
        selectedCode?.language === 'python' ? '#' : '//'
      } ${index}\n${codeText}`;

      insertCodeBlock({
        editorState,
        data: indexData,
      });
    };

    const codeNoteStore = {
      state: { note, isEditing, editorRef, editorState, title, rawContent },
      action: {
        setEditorState,
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
