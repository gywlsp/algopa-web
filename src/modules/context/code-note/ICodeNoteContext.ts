import { EditorState, RawDraftContentState } from 'draft-js';
import { Dispatch, MutableRefObject, SetStateAction } from 'react';
import { CodeNote } from 'src/types/code';

export interface ICodeNoteContext {
  state: {
    note: CodeNote;
    isEditing: boolean;
    editorRef: MutableRefObject<any>;
    editorState: EditorState;
    title: string;
    rawContent: RawDraftContentState;
  };
  action: {
    setEditorState: Dispatch<SetStateAction<EditorState>>;
    onEditStart: () => void;
    onEditCancel: () => void;
    onTitleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onEditorStateChange: (newEditorState: EditorState) => void;
    onTab: () => void;
    toggleEditorStyle: (value: string) => void;
    onEditSave: () => Promise<void>;
    onEditSubmit: () => Promise<void>;
    onNoteDelete: () => Promise<void>;
    focusEditor: () => void;
    insertEventIndexData: (index: string, modifiedText: string) => void;
  };
}
