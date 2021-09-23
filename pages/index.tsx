import React from 'react';

import GlobalLayout from 'src/layouts/global';
import RoadmapSection from 'src/components/home/sections/roadmap';
import ProblemsPreviewSection from 'src/components/home/sections/problems-preview';
import { useRecentAuthTokens } from 'src/hooks/api/auth';

export default function HomePage() {
  useRecentAuthTokens();
  return (
    <GlobalLayout>
      <ProblemsPreviewSection />
      <RoadmapSection />
    </GlobalLayout>
  );
}
