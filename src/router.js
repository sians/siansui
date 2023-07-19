import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import ComponentIndex from 'pages/Components';

const routes = [
  { path: '/', component: ComponentIndex },
  { path: '/components/:name', component: ComponentIndex },
  { path: '*', component: ComponentIndex },
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