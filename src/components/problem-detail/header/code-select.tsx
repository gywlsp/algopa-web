import React from 'react';
import styled from 'styled-components';

import P from 'src/components/common/p';
import Select from 'src/components/common/select';
import { BLUE_GREEN } from 'src/constants/colors';

import { ICode } from 'src/interfaces/code/ICode';

export type CodeSelectProps = {
  codes: ICode[];
  selectedCodeId: string;
  selectCode: (id: string) => void;
};

export default function CodeSelect({
  codes,
  selectedCodeId,
  selectCode,
}: CodeSelectProps) {
  const selectOptions = codes?.map(({ id, tryCount }) => ({
    key: id,
    label: `try_${tryCount}`,
    value: id,
    selected: id === selectedCodeId,
  }));

  const handleSelectedCodeChange = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    selectCode(e.target.value);
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
