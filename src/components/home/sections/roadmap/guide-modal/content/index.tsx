import React from 'react';

import CategoryButtonContent from './category-button';
import GraphContent from './graph';
import FailureRateContent from './failure-rate';

export default function RoadmapGuideModalContent() {
  return (
    <>
      <CategoryButtonContent />
      <GraphContent />
      <FailureRateContent />
    </>
  );
}
