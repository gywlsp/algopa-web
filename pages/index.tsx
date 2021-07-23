import React from 'react';

import GlobalLayout from 'src/layouts/global';
import RoadmapSection from 'src/components/home/sections/roadmap';
import ProblemsPreviewSection from 'src/components/home/sections/problems-preview';

export default function HomePage() {
  return (
    <GlobalLayout>
      <ProblemsPreviewSection />
      <RoadmapSection />
    </GlobalLayout>
  );
}
