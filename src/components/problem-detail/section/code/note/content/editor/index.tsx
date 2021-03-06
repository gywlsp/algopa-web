import React from 'react';
import styled from 'styled-components';
import dynamic from 'next/dynamic';

const StylingButtonList = dynamic(() => import('./styling-button/list'));
const NoteTitleInput = dynamic(() => import('./title-input'));
const Textarea = dynamic(() => import('./textarea'));
import { GREY } from 'src/constants/colors';

import { useCodeNoteContext } from 'src/modules/context/code-note';

export default function CodeNoteEditor() {
  const {
    state: { isEditing, title },
    action: { onTitleChange, focusEditor },
  } = useCodeNoteContext();

  const handleContentWrapperClick = () => {
    if (isEditing) {
      focusEditor();
    }
  };

  return (
    <Wrapper>
      {isEditing && <StylingButtonList />}
      <ContentWrapper isEditing={isEditing} onClick={handleContentWrapperClick}>
        <NoteTitleInput value={title} onChange={onTitleChange} />
        <Textarea />
      </ContentWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  flex: 1;
  height: 100%;
`;

const ContentWrapper = styled.div<{ isEditing: boolean }>`
  flex: 1;
  height: ${({ isEditing }) => (isEditing ? 'calc(100% - 4.4rem)' : '100%')};
  padding: 2rem;
  overflow-y: scroll;
  -ms-overflow-style: auto;
  &::-webkit-scrollbar {
    display: flex;
    width: 0.4rem;
    background: none;
  }
  &::-webkit-scrollbar-thumb {
    background: ${GREY[700]};
    width: 0.4rem;
    opacity: 1;
  }
  &::-webkit-scrollbar-track {
    background: none;
  }
`;
