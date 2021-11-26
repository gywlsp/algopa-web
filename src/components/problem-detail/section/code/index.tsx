import React from 'react';
import dynamic from 'next/dynamic';
import { useRecoilValue } from 'recoil';

const EditSection = dynamic(
  () => import('src/components/problem-detail/section/code/edit')
);
const HistorySection = dynamic(
  () => import('src/components/problem-detail/section/code/history')
);
const NoteSection = dynamic(
  () => import('src/components/problem-detail/section/code/note')
);

import { CodeSectionType } from 'src/modules/atoms/problem';
import { useCodeEvents } from 'src/hooks/api/code';

export default function CodeSection() {
  const codeSectionType = useRecoilValue(CodeSectionType);
  useCodeEvents();

  return (
    <>
      <EditSection isShown={codeSectionType === 'edit'} />
      <HistorySection isShown={codeSectionType === 'history'} />
      <NoteSection isShown={codeSectionType === 'note'} />
    </>
  );
}
