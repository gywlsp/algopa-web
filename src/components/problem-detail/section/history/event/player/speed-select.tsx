import React from 'react';
import styled from 'styled-components';

import Select from 'src/components/common/select';
import { GREY } from 'src/constants/colors';

import { useCodeHistoryPlayerContext } from 'src/modules/context/code-history-player';

const PLAY_SPEED_LIST = [8, 4, 2, 1.5, 1, 0.5];

export default function CodeHistoryPlayerSpeedSelect() {
  const {
    state: { playSpeed },
    action: { updatePlaySpeed },
  } = useCodeHistoryPlayerContext();

  const selectOptions = PLAY_SPEED_LIST?.map((v) => ({
    key: v,
    label: `x${v}`,
    value: v,
    selected: v === playSpeed,
  }));

  const handleSelectedSpeedChange = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    updatePlaySpeed(+e.target.value);
  };

  return (
    <Wrapper>
      <StyledSelect
        size="small"
        options={selectOptions}
        onChange={handleSelectedSpeedChange}
        value={playSpeed}
      />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const StyledSelect = styled(Select)`
  color: ${GREY[400]};
  background-color: ${GREY[800]};
`;
