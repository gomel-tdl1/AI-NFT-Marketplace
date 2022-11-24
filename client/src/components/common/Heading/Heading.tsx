import styled from 'styled-components';
import { layout, space, typography } from 'styled-system';

import { tags, scales, HeadingProps } from './types';

export const style = {
  [scales.SM]: {
    fontSize: '14px',
    fontSizeLg: '16px',
  },
  [scales.MD]: {
    fontSize: '16px',
    fontSizeLg: '18px',
  },
  [scales.LG]: {
    fontSize: '20px',
    fontSizeLg: '24px',
  },
  [scales.XL]: {
    fontSize: '24px',
    fontSizeLg: '32px',
  },
  [scales.XXL]: {
    fontSize: '32px',
    fontSizeLg: '40px',
  },
  [scales.XXXL]: {
    fontSize: '40px',
    fontSizeLg: '48px',
  },
};

const Heading = styled.p<HeadingProps>`
  font-family: 'Permanent Marker', cursive;
  font-size: ${({ scale }) => style[scale || scales.SM].fontSize};
  font-weight: 400;
  line-height: ${({ lineHeight }) => (lineHeight ? lineHeight : `110%`)};
  ${({ theme }) => theme.mediaQueries.lg} {
    font-size: ${({ scale }) => style[scale || scales.SM].fontSize};
  }

  ${space}
  ${typography}
  ${layout}
`;

Heading.defaultProps = {
  as: tags.H2,
};

export default Heading;
