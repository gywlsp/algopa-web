import {
  convertFromRaw,
  convertToRaw,
  EditorState,
  RawDraftContentState,
  RichUtils,
} from 'draft-js';
import { useState, useContext, createContext, useEffect, useRef } from 'react';
import { useRecoilValue } from 'recoil';
import { CodeNoteSectionProps } from 'src/components/problem-detail/section/note';

import { DRAFT_INLINE_STYLES } from 'src/data/note';
import { ICodeNoteContext } from './ICodeNoteContext';
import CodeService from 'src/services/api/code';
import { selectedProblemCodeId } from 'src/modules/atoms/code';
import { useNote } from 'src/hooks/api/note';

const CodeNoteContext = createContext<ICodeNoteContext>(undefined);

export const useCodeNoteContext = () => useContext(CodeNoteContext);

export const withCodeNoteContext =
  (WrappedComponent: React.FunctionComponent<any>) =>
  (props: CodeNoteSectionProps) => {
    const selectedCodeId = useRecoilValue(selectedProblemCodeId);
    const { data: note } = useNote(selectedCodeId);
    const [editorState, setEditorState] = useState(() =>
      EditorState.createEmpty()
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
        }
    }, [JSON.stringify(note && note[noteType])]);

    useEffect(() => {
      setEditing(false);
    }, [selectedCodeId]);

    const convertToEditorState = (rawContent: RawDraftContentState) => {
      const content = convertFromRaw(rawContent);
      return EditorState.createWithContent(content);
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

    const toggleEditorStyle = (value: string) => {
      const isInlineStyle = DRAFT_INLINE_STYLES.includes(value);
      const toggleStyle = isInlineStyle
        ? RichUtils.toggleInlineStyle
        : RichUtils.toggleBlockType;
      setEditorState(toggleStyle(editorState, value));
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

    const codeNoteStore = {
      state: { note, isEditing, editorState, title, rawContent },
      action: {
        onEditStart: handleEditStart,
        onEditCancel: handleEditCancel,
        onTitleChange: handleTitleChange,
        onEditorStateChange: handleEditorStateChange,
        toggleEditorStyle,
        onEditSave: handleEditSave,
        onEditSubmit: handleEditSubmit,
        onNoteDelete: handleNoteDelete,
      },
    };

    return (
      <CodeNoteContext.Provider value={codeNoteStore}>
        <WrappedComponent {...props} />
      </CodeNoteContext.Provider>
    );
  };
