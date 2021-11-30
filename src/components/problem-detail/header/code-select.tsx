import React from 'react';
import styled from 'styled-components';

import P from 'src/components/common/p';
import Select from 'src/components/common/select';
import { BLUE_GREEN } from 'src/constants/colors';

import { useCodeSelect } from 'src/hooks/code';

export default function CodeSelect() {
  const { options, onChange, value } = useCodeSelect();

  return (
    <>
      <Title>파일</Title>
      <StyledSelect options={options} onChange={onChange} value={value} />
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
