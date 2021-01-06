import React from 'react';
const PagePrincipal = React.lazy(() => import('./components/Home/home'));
// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Pagina Inicial', component: PagePrincipal },
];

export default routes;
