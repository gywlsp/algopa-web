import React, { useEffect } from 'react';
import dynamic from 'next/dynamic';
import styled from 'styled-components';
import { useRecoilValue } from 'recoil';

const Header = dynamic(() => import('./header'));
const IndexListSection = dynamic(() => import('./index-list'));
const EventSection = dynamic(() => import('./event'));
import { GREY } from 'src/constants/colors';

import CodeService from 'src/services/api/code';
import { CodeSectionType } from 'src/modules/atoms/problem';
import { selectedProblemCodeId } from 'src/modules/atoms/code';
import { withCodeHistoryPlayerContext } from 'src/modules/context/code-history-player';

export type CodeHistorySectionProps = {
  isShown: boolean;
};

function CodeHistorySection({ isShown }: CodeHistorySectionProps) {
  const selectedCodeId = useRecoilValue(selectedProblemCodeId);
  const codeSectionType = useRecoilValue(CodeSectionType);

  useEffect(() => {
    if (codeSectionType !== 'history') {
      return;
    }
    const fetchCodeEvents = async () => {
      try {
        const events = await CodeService.eventList(selectedCodeId);
        if (!events?.length) {
          alert('해당 코드의 풀이 내역이 없습니다.');
          return;
        }
      } catch (err) {
        alert('해당 코드의 풀이 내역을 불러올 수 없습니다.');
        console.log(err);
      }
    };

    fetchCodeEvents();
  }, [selectedCodeId, codeSectionType]);

  if (!isShown) {
    return <></>;
  }

  return (
    <Wrapper>
      <Header />
      <Row>
        <EventSection />
        <IndexListSection />
      </Row>
    </Wrapper>
  );
}

export default withCodeHistoryPlayerContext(CodeHistorySection);

const Wrapper = styled.div`
  position: relative;
  width: 66%;
  height: 100%;
  background-color: ${GREY[850]};
`;

const Row = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;
