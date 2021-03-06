import React from 'react';
import styled from 'styled-components';
import dynamic from 'next/dynamic';

const Header = dynamic(() => import('./header'));
const IndexListSection = dynamic(() => import('./index-list'));
const ContentSection = dynamic(() => import('./content'));
import { GREY } from 'src/constants/colors';

import {
  useCodeNoteContext,
  withCodeNoteContext,
} from 'src/modules/context/code-note';

export type CodeNoteSectionProps = {
  isShown: boolean;
};

function CodeNoteSection({ isShown }: CodeNoteSectionProps) {
  const {
    state: { isEditing },
  } = useCodeNoteContext();

  if (!isShown) {
    return <></>;
  }

  return (
    <Wrapper>
      <Header />
      <Row>
        <ContentSection />
        {isEditing && <IndexListSection />}
      </Row>
    </Wrapper>
  );
}

export default withCodeNoteContext(CodeNoteSection);

const Wrapper = styled.div`
  position: relative;
  width: 66%;
  height: 100%;
  background-color: ${GREY[850]};
`;

const Row = styled.div`
  display: flex;
  width: 100%;
  height: calc(100% - 4.4rem);
`;
