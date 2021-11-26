import React from 'react';
import styled from 'styled-components';
import { useRecoilValue } from 'recoil';

import P from 'src/components/common/p';
import Select from 'src/components/common/select';
import { BLUE_GREEN } from 'src/constants/colors';

import { CodeSectionType } from 'src/modules/atoms/problem';
import { useProblemCodes, useSelectedCode } from 'src/hooks/api/code';
import CodeService from 'src/services/api/code';

export default function CodeSelect() {
  const { data: codes } = useProblemCodes();
  const { id: selectedCodeId, select } = useSelectedCode();
  const codeSectionType = useRecoilValue(CodeSectionType);
  const selectOptions = (codes || [])?.map(({ id, tryCount }) => ({
    key: id,
    label: `try_${tryCount}`,
    value: id,
    selected: id === selectedCodeId,
  }));

  const handleSelectedCodeChange = async (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const { value } = e.target;
    if (codeSectionType === 'history') {
      try {
        const events = await CodeService.eventList(value);
        if (!events?.length) {
          alert('해당 코드의 풀이 내역이 없습니다.');
          return;
        }
      } catch (err) {
        alert('해당 코드의 풀이 내역을 불러올 수 없습니다.');
        console.log(err);
      }
    }
    select(value);
  };

  return (
    <>
      <Title>파일</Title>
      <StyledSelect
        options={selectOptions}
        onChange={handleSelectedCodeChange}
        value={selectedCodeId}
      />
    </>
  );
}

const Title = styled(P).attrs({
  level: 3,
  color: BLUE_GREEN[200],
})`
  margin-left: auto;
`;

const StyledSelect = styled(Select)`
  margin-left: 0.8rem;
`;
