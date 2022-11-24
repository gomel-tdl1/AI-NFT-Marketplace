import React, { FC, InputHTMLAttributes, useState } from 'react';

import { StyledInput, StyledInputWrapper } from './styles';

export const Input: FC<InputHTMLAttributes<HTMLInputElement>> = ({
  onFocus,
  onBlur,
  ...props
}) => {
  const [focus, setFocus] = useState<boolean>(false);
  return (
    <StyledInputWrapper focus={focus}>
      <StyledInput
        onFocus={(e) => {
          setFocus(true);
          if (onFocus) onFocus(e);
        }}
        onBlur={(e) => {
          setFocus(false);
          if (onBlur) onBlur(e);
        }}
        {...props}
      />
    </StyledInputWrapper>
  );
};
