import React from 'react';
import { ThemeProvider } from 'styled-components';

import lightTheme from './light';
import { CustomThemeProviderProps } from './types';

const CustomThemeProvider = ({
  theme = lightTheme,
  children,
}: CustomThemeProviderProps) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default CustomThemeProvider;
