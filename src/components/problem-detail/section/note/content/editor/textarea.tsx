import React from 'react';
import styled from 'styled-components';
import { ContentBlock, DraftStyleMap, Editor as NoteEditor } from 'draft-js';

import { GREY } from 'src/constants/colors';

import { DRAFT_BLOCK_STYLES } from 'src/data/note';
import { useCodeNoteContext } from 'src/modules/context/code-note';

export default function CodeNoteEditorTextarea() {
  const {
    state: { isEditing, editorRef, editorState },
    action: { onEditorStateChange, onTab },
  } = useCodeNoteContext();

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
        ref={editorRef}
        readOnly={!isEditing}
        editorState={editorState}
        onChange={onEditorStateChange}
        onTab={onTab}
        customStyleMap={styleMap}
        blockStyleFn={blockStyleFn}
      />
    </Wrapper>
  );
}

const styleMap: DraftStyleMap = {
  CODE: {
    backgroundColor: GREY[750],
    padding: '0.2rem 0.4rem',
    borderRadius: '0.2rem',
  },
};

const Wrapper = styled.div`
  flex: 1;
  min-height: calc(100% - 9.2rem);
  margin-bottom: 2rem;
`;
