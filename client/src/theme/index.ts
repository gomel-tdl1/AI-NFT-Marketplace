import {
  Breakpoints,
  Colors,
  FontWeight,
  MediaQueries,
  Spacing,
  ZIndices,
} from './types';

export interface CustomTheme {
  siteWidth: number;
  colors: Colors;
  breakpoints: Breakpoints;
  mediaQueries: MediaQueries;
  spacing: Spacing;
  zIndices: ZIndices;
  fontWeight: FontWeight;
}

export { lightColors } from './colors';
export { default as light } from './light';
export { default as CustomThemeProvider } from './CustomThemeProvider';
export * from './types';
