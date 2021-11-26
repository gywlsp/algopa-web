import React from 'react';
import { useRecoilValue } from 'recoil';

import EditSection from 'src/components/problem-detail/section/code/edit';
import HistorySection from 'src/components/problem-detail/section/code/history';
import NoteSection from 'src/components/problem-detail/section/code/note';

import { problemPageRightSectionType } from 'src/modules/atoms/problem';
import { useCodeEvents } from 'src/hooks/api/code';

export default function CodeSection() {
  const rightSectionType = useRecoilValue(problemPageRightSectionType);
  useCodeEvents();

  return (
    <>
      <EditSection isShown={rightSectionType === 'code'} />
      <HistorySection isShown={rightSectionType === 'history'} />
      <NoteSection isShown={rightSectionType === 'note'} />
    </>
  );
}
