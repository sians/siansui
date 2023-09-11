import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Index from 'pages/Index';
import ComponentDetail from 'pages/ComponentDetail';
import HookDetail from 'pages/HookDetail';
import Home from 'pages/Home';
import Contact from 'pages/Contact';


import ALL_PAGE_DATA from 'data/pageData';

import { Nav } from 'components';

const routes = [
  { path: '/', component: Home },
  { path: '/components', component: Index, props: { pageName: 'components'} },
  { path: '/components/:name', component: ComponentDetail },
  { path: '/hooks', component: Index, props: { pageName: 'hooks'} },  
  { path: '/hooks/:name', component: HookDetail },
  { path: '/contact', component: Contact },
  { path: '/*', component: Home },
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
              element={(
                <>
                  <Nav pageData={ALL_PAGE_DATA}/>
                  <route.component {...route.props} />
                </>
              )} 
            />
          );
        })}
      </Routes>
    </BrowserRouter>
  );
}