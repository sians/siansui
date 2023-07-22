import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import ComponentIndex from 'pages/Components';
import HookIndex from 'pages/Hooks';
import HookDetail from 'pages/HookDetail';

const routes = [
  { path: '/', component: ComponentIndex },
  { path: '/components', component: ComponentIndex },
  { path: '/components/:name', component: ComponentIndex },
  { path: '/hooks', component: HookIndex },  
  { path: '/hooks/:name', component: HookDetail },
  { path: '/*', component: ComponentIndex },
];

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        {routes.map((route, index) => {
          return (
            <Route
              key={`route-${index}`} 
              path={route.path} 
              element={<route.component {...route.props} />} 
            />
          );
        })}
      </Routes>
    </BrowserRouter>
  );
}