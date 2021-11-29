import styled from 'styled-components';

import RadioButton from './button';

import { Company } from 'src/types/problem';

const COMPANY_DATA: Company[] = [undefined, 'samsung', 'kakao'];

export default function CompanyRadio() {
  return (
    <Wrapper>
      {COMPANY_DATA?.map((company, i) => (
        <RadioButton key={i} company={company} />
      ))}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin: 1.2rem 1.6rem 0.8rem;
`;
