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
    action: { toggleEditorStyle },
  } = useCodeNoteContext();

  const handleClick = () => {
    toggleEditorStyle(value);
  };

  return <Button onClick={handleClick}>{title}</Button>;
}

const Button = styled.button`
  flex: 1;
  padding: 1.2rem 2rem;
  height: 4.4rem;
  font-size: 1.2rem;
  color: ${BLUE_GREEN[200]};
  background: none;
  border: 1px solid ${GREY[900]};
  cursor: pointer;
  &:hover {
    color: ${BLUE_GREEN[400]};
    transition: all 0.2s;
  }
`;
