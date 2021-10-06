import React from 'react';
import styled from 'styled-components';

import P from 'src/components/common/p';
import { GREY } from 'src/constants/colors';

export default function CodeNoteContentView() {
  const hasNote = false;

  return (
    <Wrapper>
      {!hasNote && <GuideText>생성된 풀이노트가 없습니다.</GuideText>}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  height: 100%;
`;

const GuideText = styled(P).attrs({ level: 1, color: GREY[500] })`
  width: fit-content;
  height: fit-content;
  margin-bottom: 12rem;
`;
