import React from 'react';
import styled from 'styled-components';

import { BLUE_GREEN, GREY } from 'src/constants/colors';

import { useCodeNoteContext } from 'src/modules/context/code-note';

export type NoteEditorStyleToggleButtonProps = {
  title: string;
  value: string;
};

export default function NoteEditorStyleToggleButton({
  title,
  value,
}: NoteEditorStyleToggleButtonProps) {
  const {
    state: { editorState },
    action: { toggleEditorStyle },
  } = useCodeNoteContext();

  const handleClick = () => {
    toggleEditorStyle(value);
  };

  const currSelection = editorState?.getSelection();
  const currBlockType = editorState
    ?.getCurrentContent()
    ?.getBlockForKey(currSelection?.getStartKey())
    ?.getType();
  const currInlineStyle = editorState?.getCurrentInlineStyle();

  return (
    <Button
      active={currBlockType === value || currInlineStyle.has(value)}
      onClick={handleClick}
    >
      {title}
    </Button>
  );
}

const Button = styled.button<{ active: boolean }>`
  flex: 1;
  padding: 1.2rem 2rem;
  height: 4.4rem;
  font-size: 1.2rem;
  color: ${({ active }) => BLUE_GREEN[active ? 400 : 200]};
  background: none;
  border: 1px solid ${GREY[900]};
  cursor: pointer;
  &:hover {
    color: ${BLUE_GREEN[400]};
    transition: all 0.2s;
  }
`;
