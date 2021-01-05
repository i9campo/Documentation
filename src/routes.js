import React from 'react';

const PagePrincipal = React.lazy(() => import('./components/home/home'));
const FrmIndexInpuT = React.lazy(() => import('./components/ExampleInput/index')); 
const FrmIndexInputRegistro = React.lazy(() => import('./components/ExampleInputRegistro/index')); 
const FrmIndexInputContato = React.lazy(() => import('./components/ExampleInputContato')); 


const FontAwesome = React.lazy(() => import('./views/Icons/FontAwesome'));
const SimpleLineIcons = React.lazy(() => import('./views/Icons/SimpleLineIcons'));

// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Pagina Inicial', component: PagePrincipal },
  { path: '/nav/InpuT', name: 'InpuT', component: FrmIndexInpuT },
  { path: '/nav/InputRegistro', name: 'InpuTRegistro', component: FrmIndexInputRegistro },
  { path: '/nav/InputContato', name: 'InpuTContato', component: FrmIndexInputContato }, 
  { path: '/icons/font-awesome', name: 'Font Awesome', component: FontAwesome },
  { path: '/icons/simple-line-icons', name: 'Simple Line Icons', component: SimpleLineIcons },
];

export default routes;
