import { RawDraftContentState } from 'draft-js';
import { useState, useContext, createContext, useEffect, useRef } from 'react';
import { useRecoilValue } from 'recoil';
import { CodeNoteSectionProps } from 'src/components/problem-detail/section/note';
import { useNote } from 'src/hooks/api/note';

import { selectedProblemCodeId } from 'src/modules/atoms/code';
import { ICodeNoteContext } from './ICodeNoteContext';

const CodeNoteContext = createContext<ICodeNoteContext>(undefined);

export const useCodeNoteContext = () => useContext(CodeNoteContext);

export const withCodeNoteContext =
  (WrappedComponent: React.FunctionComponent<any>) =>
  (props: CodeNoteSectionProps) => {
    const selectedCodeId = useRecoilValue(selectedProblemCodeId);
    const { data: note } = useNote(selectedCodeId);
    const [isEditing, setEditing] = useState(false);
    const [editorNoteContentType, setEditorNoteContentType] = useState<
      'submitted' | 'tempSaved'
    >('submitted');
    const [title, setTitle] = useState('');
    const [rawContent, setRawContent] = useState<RawDraftContentState>();

    useEffect(() => {
      if (isEditing && note && note[editorNoteContentType]) {
        const { title, content } = note[editorNoteContentType];
        setTitle(title);
        setRawContent(content);
      }
    }, [note, isEditing]);

    const handleEditStart = () => {
      if (note?.tempSaved && confirm('임시저장된 내용을 불러오시겠습니까?')) {
        setEditorNoteContentType('tempSaved');
      } else if (note?.submitted) {
        setEditorNoteContentType('submitted');
      }
      setEditing(true);
    };

    const handleEditCancel = () => {
      setEditing(false);
    };

    const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setTitle(e.target.value);
    };

    const updateRawContent = (newRawContent: RawDraftContentState) => {
      setRawContent(newRawContent);
    };

    const codeNoteStore = {
      state: { isEditing, note, title, rawContent },
      action: {
        onEditStart: handleEditStart,
        onEditCancel: handleEditCancel,
        onTitleChange: handleTitleChange,
        updateRawContent,
      },
    };

    return (
      <CodeNoteContext.Provider value={codeNoteStore}>
        <WrappedComponent {...props} />
      </CodeNoteContext.Provider>
    );
  };
