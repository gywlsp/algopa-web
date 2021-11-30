import React from 'react';
import dynamic from 'next/dynamic';
import styled from 'styled-components';

const Header = dynamic(() => import('./header'));
const Content = dynamic(() => import('./content'));
import { GREY } from 'src/constants/colors';

import { useEventIndexEdit } from 'src/hooks/code';

export default function EventDetailSection() {
  const { hasIndex, index, isEditing, onStart, onCancel, onSubmit, onChange } =
    useEventIndexEdit();

  return (
    <Wrapper>
      <Header
        isEditing={isEditing}
        hasIndex={hasIndex}
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
