// eslint-disable-next-line import/order
import React from 'react';

import './App.css';
import { BrowserRouter } from 'react-router-dom';

import { RenderRootRoutes } from './routes/RenderRoutes';
import { CustomThemeProvider } from './theme';
import lightTheme from './theme/light';
import ResetCSS from './theme/ResetCSS';

function App() {
  return (
    <CustomThemeProvider theme={lightTheme}>
      <BrowserRouter>
        <ResetCSS />
        <RenderRootRoutes />
      </BrowserRouter>
    </CustomThemeProvider>
  );
}

export default App;
