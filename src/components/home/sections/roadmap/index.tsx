import React from 'react';
import styled from 'styled-components';
import { useRecoilValue } from 'recoil';

import RoadmapGraph from 'src/components/home/sections/roadmap/graph';
import CategoryRadio from './category-radio';
import ProblemInfoModal from './problem-modal';
import RoadmapGuideModal from './guide-modal';
import GuideModalOpenButton from './guide-modal/open-button';
import Section from 'src/components/common/section';
import Img from 'src/components/common/img';
import { GREY } from 'src/constants/colors';
import { COMPANY_IMAGES } from 'src/components/common/company-radio/button';

import { useRoadmap } from 'src/hooks/api/roadmap';
import { selectedCompany } from 'src/modules/atoms/problem';

export default function RoadmapSection() {
  const company = useRecoilValue(selectedCompany);
  const {
    initGraph,
    isFetched,
    graphData,
    categoryNodes,
    events,
    selectedCategoryNodeId,
    selectedProblemNode,
    selectNode,
    isProblemModalOpen,
    closeProblemModal,
    isGuideModalOpen,
    openGuideModal,
    closeGuideModal,
  } = useRoadmap();

  return (
    <Section
      title="취업으로 가는 코딩 테스트 준비 로드맵"
      rightComponent={
        <>
          <CompanyImg
            src={`/images/${COMPANY_IMAGES[company]}`}
            alt={company}
          />
          <GuideModalOpenButton onClick={openGuideModal} />
        </>
      }
      rightComponentAlign="left"
    >
      <RoadmapGuideModal isOpen={isGuideModalOpen} onClose={closeGuideModal} />
      <CategoryRadio
        categoryNodes={categoryNodes}
        selectedId={selectedCategoryNodeId}
        selectNode={selectNode}
      />
      <RoadmapGraph
        isFetched={isFetched}
        graphData={graphData}
        initGraph={initGraph}
        events={events}
      />
      <ProblemInfoModal
        {...selectedProblemNode}
        isOpen={isProblemModalOpen}
        onClose={closeProblemModal}
      />
    </Section>
  );
}

const CompanyImg = styled(Img).attrs({
  width: '2.4rem',
  height: '2.4rem',
  circle: true,
  cover: true,
})`
  border: 1px solid ${GREY[800]};
  margin: 0.2rem 0.4rem 0;
`;
