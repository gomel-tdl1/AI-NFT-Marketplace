import styled from 'styled-components';
import { layout, LayoutProps, space, SpaceProps } from 'styled-system';

export const MarkerButton = styled.a<
  SpaceProps & LayoutProps & { fillColor?: string }
>`
  cursor: pointer;
  font-family: 'Permanent Marker', cursive;
  font-size: 24px;
  letter-spacing: 2px;
  background-image: linear-gradient(
    to right,
    ${({ theme, fillColor }) =>
      fillColor ? fillColor : theme.colors.primary[100]},
    ${({ theme, fillColor }) =>
        fillColor ? fillColor : theme.colors.primary[100]}
      50%,
    ${({ theme }) => theme.colors.typography[990]} 50%
  );
  background-size: 200% 100%;
  background-position: -100%;
  display: inline-block;
  padding: 5px 0;
  position: relative;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  transition: all 0.3s ease-in-out;

  &:before {
    content: '';
    background: ${({ theme, fillColor }) =>
      fillColor ? fillColor : theme.colors.primary[100]};
    display: block;
    position: absolute;
    bottom: -3px;
    left: 0;
    width: 0;
    height: 3px;
    transition: all 0.3s ease-in-out;
  }

  &:hover {
    background-position: 0;
  }

  &:hover::before {
    width: 100%;
  }

  ${layout}
  ${space}
`;
