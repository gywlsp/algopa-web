import React from 'react';
import styled from 'styled-components';
import {
  ContentBlock,
  DraftStyleMap,
  Editor as NoteEditor,
  EditorState,
} from 'draft-js';

import { GREY } from 'src/constants/colors';

import { DRAFT_BLOCK_STYLES } from 'src/data/note';

export type CodeNoteEditorTextareaProps = {
  isEditing: boolean;
  editorState: EditorState;
  onChange: (newEditorState: EditorState) => void;
};

const styleMap: DraftStyleMap = {
  CODE: {
    backgroundColor: GREY[750],
    padding: '0.2rem 0.4rem',
    borderRadius: '0.2rem',
  },
};

export default function CodeNoteEditorTextarea({
  isEditing,
  editorState,
  onChange,
}: CodeNoteEditorTextareaProps) {
  const blockStyleFn = (block: ContentBlock) => {
    const blockClassName = DRAFT_BLOCK_STYLES.reduce(
      (acc, value) => ({ ...acc, [value]: `note-edit` }),
      {}
    );
    return blockClassName[block.getType()] || null;
  };

  return (
    <Wrapper>
      <NoteEditor
        readOnly={!isEditing}
        editorState={editorState}
        onChange={onChange}
        customStyleMap={styleMap}
        blockStyleFn={blockStyleFn}
      />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  flex: 1;
  min-height: calc(100% - 9.2rem);
  margin-bottom: 2rem;
`;
