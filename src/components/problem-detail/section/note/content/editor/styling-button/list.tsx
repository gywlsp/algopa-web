import React from 'react';
import styled from 'styled-components';

import StylingButton from '.';

const BUTTON_VALUES = [
  { title: 'H1', value: 'header-one' },
  { title: 'H2', value: 'header-two' },
  { title: 'H3', value: 'header-three' },
  { title: 'BLOCKQUOTE', value: 'blockquote' },
  { title: 'UL', value: 'unordered-list-item' },
  { title: 'OL', value: 'ordered-list-item' },
  { title: 'BOLD', value: 'bold' },
  { title: 'UNDERLINE', value: 'underline' },
  { title: 'CODEBLOCK', value: 'code-block' },
  { title: '</>', value: 'code' },
];

export default function NoteEditorStylingButtonList() {
  return (
    <Wrapper>
      {BUTTON_VALUES.map(({ title, value }) => (
        <StylingButton
          key={value}
          title={title}
          onClick={() => {
            console.log(value);
          }}
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
