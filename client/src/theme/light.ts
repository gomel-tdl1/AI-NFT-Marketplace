import { DefaultTheme } from 'styled-components';

import base from './base';
import { lightColors } from './colors';

const lightTheme: DefaultTheme = {
  ...base,
  colors: lightColors,
};

export default lightTheme;
