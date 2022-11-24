import styled from 'styled-components';

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 64px;
  background-color: #000000;
  box-shadow: 0 2px 8px #000000;
  padding: 0 100px;
  box-sizing: border-box;
`;

export const LogoImage = styled.img`
  width: 48px;
  height: 48px;
`;

export const HeaderNavBar = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 24px;
`;
