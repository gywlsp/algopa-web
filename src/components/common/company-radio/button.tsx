import styled from 'styled-components';
import { useRecoilState } from 'recoil';

import Img from 'src/components/common/img';

import { GREY, BLUE_GREEN } from 'src/constants/colors';
import { Company } from 'src/types/problem';
import { selectedCompany } from 'src/modules/atoms/problem';

export type CompanyRadioButtonProps = {
  company: Company;
};

const COMPANY_IMAGES = {
  undefined: 'rocket.png',
  kakao: 'kakao.jpeg',
  samsung: 'samsung.png',
};

export default function CompanyRadioButton({
  company: _company,
}: CompanyRadioButtonProps) {
  const [company, setCompany] = useRecoilState(selectedCompany);
  const isSelected = company === _company;

  const handleButtonClick = () => {
    setCompany(_company);
  };

  return (
    <Wrapper onClick={handleButtonClick}>
      <StyledImg
        src={`/images/${COMPANY_IMAGES[_company]}`}
        alt={_company}
        isSelected={isSelected}
      />
    </Wrapper>
  );
}

const Wrapper = styled.button`
  color: ${BLUE_GREEN[900]};
  padding: 0;
  margin: 0;
  margin-left: 0.8rem;
  overflow: hidden;
  cursor: pointer;
  background: none;
  border: none;
`;

const StyledImg = styled(Img).attrs({
  width: '2.8rem',
  height: '2.8rem',
  circle: true,
  cover: true,
})<{ isSelected: boolean }>`
  border: 1px solid ${({ isSelected }) => (isSelected ? GREY[900] : GREY[400])};
  &:hover {
    border: 1px solid ${GREY[800]};
    transition: all 0.2s;
  }
`;
