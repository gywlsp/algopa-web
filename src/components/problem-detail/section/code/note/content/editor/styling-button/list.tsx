import React from 'react';
import styled from 'styled-components';

import StyleToggleButton from '.';

import { DRAFT_STYLE_BUTTONS } from 'src/data/note';

export default function NoteEditorStyleToggleButtonList() {
  return (
    <Wrapper>
      {DRAFT_STYLE_BUTTONS.map(({ title, Icon, value }) => (
        <StyleToggleButton
          key={value}
          title={title}
          Icon={Icon}
          value={value}
        />
      ))}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-flow: wrap;
  flex: 1;
`;
