import React from 'react';
import { Navigate, RouteObject } from 'react-router-dom';

import { AppRouteComponent } from './AppRouteComponent';
import { Routes } from './config';

import { Index } from '../pages/Mint';

export const routesConfig: RouteObject[] = [
  {
    path: Routes.App,
    element: <AppRouteComponent />,
    children: [
      {
        path: Routes.Mint,
        element: <Index />,
      },
    ],
  },
  {
    path: '*',
    element: <Navigate to={Routes.App} replace />,
  },
];
