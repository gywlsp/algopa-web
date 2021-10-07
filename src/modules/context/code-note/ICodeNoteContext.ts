import { RawDraftContentState } from 'draft-js';
import { CodeNote } from 'src/types/code';

export interface ICodeNoteContext {
  state: {
    note: CodeNote;
    isEditing: boolean;
    title: string;
    rawContent: RawDraftContentState;
  };
  action: {
    onEditStart: () => void;
    onEditCancel: () => void;
    onTitleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    updateRawContent: (newRawContent: RawDraftContentState) => void;
  };
}
