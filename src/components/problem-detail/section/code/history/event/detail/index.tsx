import React from 'react';
import styled from 'styled-components';

import Header from './header';
import Content from './content';
import { GREY } from 'src/constants/colors';

import { useEventIndexEdit } from 'src/hooks/code';

export default function EventDetailSection() {
  const { index, isEditing, onStart, onCancel, onSubmit, onChange } =
    useEventIndexEdit();

  return (
    <Wrapper>
      <Header
        isEditing={isEditing}
        onStart={onStart}
        onSubmit={onSubmit}
        onCancel={onCancel}
      />
      <Content index={index} onIndexChange={onChange} isEditing={isEditing} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  height: 17.2rem;
  border-top: 0.1rem solid ${GREY[900]};
  background-color: ${GREY[850]};
`;
