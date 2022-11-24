import styled from 'styled-components';

export const FlipCardInner = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.6s;
  transform-style: preserve-3d;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  border-radius: 20px;
`;
export const FlipCardFront = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  background-color: #bbb;
  color: black;
  border-radius: 20px;
`;
export const FlipCardBack = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  background-color: #ffc72c;
  color: ${({ theme }) => theme.colors.typography[800]};
  transform: rotateY(180deg);
  border-radius: 20px;
  box-shadow: inset 0 0 10px #ffffff;
  font-family: 'Permanent Marker', cursive;
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const FlipCardContainer = styled.div`
  background-color: transparent;
  width: 300px;
  height: 300px;

  &:hover ${FlipCardInner} {
    transform: rotateY(180deg);
  }
`;

export const FlipCardFrontImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 20px;
  box-shadow: inset 0 0 10px #ffffff;
`;
