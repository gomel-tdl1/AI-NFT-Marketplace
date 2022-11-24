import styled from 'styled-components';

export const StyledInputWrapper = styled.div<{ focus: boolean }>`
  display: flex;
  align-items: center;
  position: relative;
  z-index: 0;
  width: 100%;
  height: 40px;
  border-radius: 10px;
  overflow: hidden;
  padding: 4px 20px;
  background: ${({ theme, focus }) =>
    focus ? '' : theme.colors.typography[100]};

  ${({ focus }) =>
    focus
      ? `
    &::before {
    content: '';
    box-sizing: border-box;
    position: absolute;
    z-index: -2;
    left: -50%;
    top: -50%;
    width: 200%;
    height: 600px;
    background-color: #399953;
    background-repeat: no-repeat;
    background-size: 50% 50%, 50% 50%;
    background-position: 0 0, 100% 0, 100% 100%, 0 100%;
    background-image: linear-gradient(#399953, #399953), linear-gradient(#fbb300, #fbb300), linear-gradient(#d53e33, #d53e33), linear-gradient(#377af5, #377af5);
    animation: rotate 4s linear infinite;
    @keyframes rotate {
      100% {
        transform: rotate(1turn);
      }
    }
  }

  &::after {
    content: '';
    box-sizing: border-box;
    position: absolute;
    z-index: -1;
    left: 3px;
    top: 3px;
    width: calc(100% - 6px);
    height: calc(100% - 6px);
    background: white;
    border-radius: 5px;
  }
  `
      : ''}
`;

export const StyledInput = styled.input`
  width: calc(100% - 20px);
  height: calc(100% - 10px);
  outline: none;
  border: none;
  border-radius: 10px;
  font-family: 'Permanent Marker', cursive;
  font-size: 18px;
  background: transparent;
  caret-color: #399953;
`;
