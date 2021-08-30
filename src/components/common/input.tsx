import React, { ReactNode } from 'react';
import styled from 'styled-components';

import { GREY, WHITE } from 'src/constants/colors';
import P from './p';

export type TextInputProps = Pick<
  React.InputHTMLAttributes<HTMLInputElement>,
  | 'className'
  | 'onKeyDown'
  | 'name'
  | 'placeholder'
  | 'onChange'
  | 'maxLength'
  | 'type'
  | 'min'
  | 'max'
> & {
  RightComponent?: ReactNode;
  error?: { state: boolean; text: string };
  success?: { state: boolean; text: string };
  value: string;
};

function TextInput({
  name,
  value,
  placeholder,
  onChange,
  maxLength,
  className,
  RightComponent,
  error,
  success,
}: TextInputProps) {
  return (
    <>
      <Row>
        <Wrapper>
          <InputWrapper error={error?.state} className={className}>
            <StyledInput
              name={name}
              value={value}
              onChange={onChange}
              placeholder={placeholder}
            />
          </InputWrapper>
          <Row>
            <GuideText level={1} color={error?.state ? 'red' : 'blue'}>
              {error?.state && error?.text}
              {success?.state && success?.text}
            </GuideText>
            {maxLength && (
              <ValueLengthIndicator level={1} color={GREY[800]}>
                {value.length}/{maxLength}
              </ValueLengthIndicator>
            )}
          </Row>
        </Wrapper>
        {RightComponent}
      </Row>
    </>
  );
}

export default React.memo(TextInput);

const Row = styled.div`
  display: flex;
  flex: 1;
`;

const Wrapper = styled.div`
  flex: 1;
`;

const InputWrapper = styled.div<{ error: boolean }>`
  flex: 1;
  height: 4rem;
  padding: 0 1.2rem;
  background-color: ${WHITE};
  border: 1px solid ${GREY[400]};
  :focus-within {
    border: 1px solid ${GREY[500]};
  }
`;

const StyledInput = styled.input`
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  font-size: 1.6rem;
  color: ${GREY[800]};

  ::placeholder,
  ::-webkit-input-placeholder {
    color: ${GREY[500]};
    font-weight: 400;
  }
  :-ms-input-placeholder {
    color: ${GREY[500]};
    font-weight: 400;
  }
  :-mos-input-placeholder {
    color: ${GREY[500]};
    font-weight: 400;
  }
`;

const GuideText = styled(P)`
  margin-top: 0.4rem;
`;

const ValueLengthIndicator = styled(P)`
  margin-left: auto;
  margin-top: 0.4rem;
`;
