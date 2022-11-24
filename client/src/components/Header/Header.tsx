import React from 'react';
import { useNavigate } from 'react-router-dom';

import { HeaderContainer, HeaderNavBar, LogoImage } from './styles';

import LogoIcon from '../../assets/logo.svg';
import { Routes } from '../../routes/config';
import { MarkerButton } from '../common/Button';

export const Header = () => {
  const navigate = useNavigate();
  return (
    <HeaderContainer>
      <LogoImage src={LogoIcon} alt="logo" />
      <HeaderNavBar>
        <MarkerButton onClick={() => navigate(Routes.App)}>Home</MarkerButton>
        <MarkerButton onClick={() => navigate(Routes.Mint)}>Mint</MarkerButton>
      </HeaderNavBar>
      <p style={{ color: '#ffffff' }}>connect</p>
    </HeaderContainer>
  );
};
