import React from 'react';
import { useRecoilValue } from 'recoil';

import EditSection from 'src/components/problem-detail/section/code/edit';
import HistorySection from 'src/components/problem-detail/section/code/history';
import NoteSection from 'src/components/problem-detail/section/code/note';

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
