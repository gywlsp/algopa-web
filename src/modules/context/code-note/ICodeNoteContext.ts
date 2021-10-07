import { EditorState, RawDraftContentState } from 'draft-js';
import { CodeNote } from 'src/types/code';

export interface ICodeNoteContext {
  state: {
    note: CodeNote;
    isEditing: boolean;
    editorState: EditorState;
    title: string;
    rawContent: RawDraftContentState;
  };
  action: {
    onEditStart: () => void;
    onEditCancel: () => void;
    onTitleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onEditorStateChange: (newEditorState: EditorState) => void;
    toggleEditorStyle: (value: string) => void;
    onEditSave: () => Promise<void>;
    onEditSubmit: () => Promise<void>;
    onNoteDelete: () => Promise<void>;
  };
}
