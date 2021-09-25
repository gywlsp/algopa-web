import React from 'react';
import styled from 'styled-components';
import { useRecoilValue } from 'recoil';

import P from 'src/components/common/p';
import Select from 'src/components/common/select';
import { GREY } from 'src/constants/colors';

import CodeService from 'src/services/api/code';
import { CodeLanguage } from 'src/types/code';
import { selectedProblemCode } from 'src/modules/selectors/code';

const LANGUAGE_OPTIONS = [
  { label: 'python', value: 'python' },
  { label: 'javascript', value: 'javascript' },
];

export default function LanguageSelect() {
  const code = useRecoilValue(selectedProblemCode);

  const handleSelectedCodeChange = async (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    if (
      !confirm(
        '언어를 변경하면 해당 파일의 코드 변경 내역이 초기화됩니다.\n언어를 변경하시겠습니까?'
      )
    ) {
      return;
    }
    try {
      await CodeService.update(code?.id, {
        language: e.target.value as CodeLanguage,
      });
    } catch (err) {
      alert('코드 언어 변경 실패');
    }
  };

  return (
    <>
      <Title>언어</Title>
      <StyledSelect
        size="small"
        options={LANGUAGE_OPTIONS}
        onChange={handleSelectedCodeChange}
        value={code?.language}
      />
    </>
  );
}

const Title = styled(P).attrs({
  level: 2,
  color: GREY[400],
})`
  margin-right: 0.6rem;
`;

const StyledSelect = styled(Select)`
  margin-right: 1.2rem;
  color: ${GREY[400]};
  background-color: ${GREY[800]};
`;
