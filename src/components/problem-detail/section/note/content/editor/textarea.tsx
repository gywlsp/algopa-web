import React from 'react';
import styled from 'styled-components';
import {
  ContentBlock,
  DraftHandleValue,
  DraftStyleMap,
  Editor as NoteEditor,
  EditorState,
  RichUtils,
} from 'draft-js';

import { GREY } from 'src/constants/colors';

import { DRAFT_BLOCK_STYLES } from 'src/data/note';
import { useCodeNoteContext } from 'src/modules/context/code-note';

export default function CodeNoteEditorTextarea() {
  const {
    state: { isEditing, editorRef, editorState },
    action: { setEditorState, onEditorStateChange, onTab },
  } = useCodeNoteContext();

  const blockStyleFn = (block: ContentBlock) => {
    const blockClassName = DRAFT_BLOCK_STYLES.reduce(
      (acc, value) => ({ ...acc, [value]: `note-edit` }),
      {}
    );
    return blockClassName[block.getType()] || null;
  };

  const handleKeyCommand = (
    command: string,
    editorState: EditorState
  ): DraftHandleValue => {
    const newState = RichUtils.handleKeyCommand(editorState, command);
    if (newState) {
      setEditorState(newState);
      return 'handled';
    }
    return 'not-handled';
  };

  const handleTab = (e: any) => {
    e.preventDefault();
    onTab();
  };

  return (
    <Wrapper>
      <NoteEditor
        ref={editorRef}
        readOnly={!isEditing}
        editorState={editorState}
        onChange={onEditorStateChange}
        onTab={handleTab}
        customStyleMap={styleMap}
        handleKeyCommand={handleKeyCommand}
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
