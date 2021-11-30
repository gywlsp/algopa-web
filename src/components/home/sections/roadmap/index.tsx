import React from 'react';
import styled from 'styled-components';
import dynamic from 'next/dynamic';
import { useRecoilValue } from 'recoil';

const RoadmapGraph = dynamic(
  () => import('src/components/home/sections/roadmap/graph')
);
const CategoryRadio = dynamic(() => import('./category-radio'));
const ProblemInfoModal = dynamic(() => import('./problem-modal'));
const RoadmapGuideModal = dynamic(() => import('./guide-modal'));
const GuideModalOpenButton = dynamic(() => import('./guide-modal/open-button'));
const Section = dynamic(() => import('src/components/common/section'));
const Img = dynamic(() => import('src/components/common/img'));
import { GREY } from 'src/constants/colors';
import { COMPANY_IMAGES } from 'src/components/common/company-radio/button';

import { useRoadmap } from 'src/hooks/roadmap';
import { selectedCompany } from 'src/modules/atoms/problem';

export default function RoadmapSection() {
  const company = useRecoilValue(selectedCompany);
  const {
    initGraph,
    isDataFetched,
    graphData,
    categoryNodes,
    events,
    selectedCategoryNodeId,
    selectedProblemNode,
    selectNode,
    isProblemInfoModalOpen,
    closeProblemInfoModal,
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
            alt={company || 'default'}
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
        isFetched={isDataFetched}
        graphData={graphData}
        initGraph={initGraph}
        events={events}
      />
      <ProblemInfoModal
        {...selectedProblemNode}
        isOpen={isProblemInfoModalOpen}
        onClose={closeProblemInfoModal}
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
