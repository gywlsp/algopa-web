import React from 'react';
import dynamic from 'next/dynamic';

const GlobalLayout = dynamic(() => import('src/layouts/global'));
const RoadmapSection = dynamic(
  () => import('src/components/home/sections/roadmap')
);
const ProblemsPreviewSection = dynamic(
  () => import('src/components/home/sections/problems-preview')
);

import { useAuth } from 'src/hooks/api/auth';

export default function HomePage() {
  useAuth();

  return (
    <GlobalLayout>
      <ProblemsPreviewSection />
      <RoadmapSection />
    </GlobalLayout>
  );
}
