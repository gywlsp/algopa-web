import React from 'react';
import { BLUE_GREEN, GREY } from 'src/constants/colors';
import styled from 'styled-components';

export type NoteEditorStylingButtonProps = {
  title: string;
  onClick: () => void;
};

export default function NoteEditorStylingButton({
  title,
  onClick,
}: NoteEditorStylingButtonProps) {
  return <Wrapper onClick={onClick}>{title}</Wrapper>;
}

const Wrapper = styled.button`
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
