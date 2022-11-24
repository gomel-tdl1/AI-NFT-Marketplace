import React from 'react';
import { Outlet } from 'react-router-dom';

import { ContentWrapper, MainWrapper } from '../components/common/Wrappers';
import { Footer } from '../components/Footer/Footer';
import { Header } from '../components/Header/Header';

export const AppRouteComponent: React.FC = React.memo(() => {
  const renderRoutes = () => {
    return (
      <MainWrapper>
        <Header />
        <ContentWrapper>
          <Outlet />
        </ContentWrapper>
        <Footer />
      </MainWrapper>
    );
  };

  return renderRoutes();
});
