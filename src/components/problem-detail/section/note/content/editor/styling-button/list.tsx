import React from 'react';
import styled from 'styled-components';

import StyleToggleButton from '.';

import { DRAFT_STYLE_BUTTONS } from 'src/data/note';

export default function NoteEditorStyleToggleButtonList() {
  return (
    <Wrapper>
      {DRAFT_STYLE_BUTTONS.map(({ title, value }) => (
        <StyleToggleButton key={value} title={title} value={value} />
      ))}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-flow: wrap;
  flex: 1;
`;
