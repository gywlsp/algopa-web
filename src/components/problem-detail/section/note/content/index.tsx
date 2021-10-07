import React from 'react';
import styled from 'styled-components';

import CodeNoteEditor from './editor';
import CodeNote from './view';

export type CodeNoteContentSectionProps = {
  isEditing: boolean;
};

export default function CodeNoteContentSection({
  isEditing,
}: CodeNoteContentSectionProps) {
  return (
    <Wrapper>
      {isEditing && <CodeNoteEditor />}
      {!isEditing && <CodeNote />}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  flex: 1;
  height: 100%;
`;
