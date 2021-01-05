import React from 'react';

const RegValidateItens = React.lazy(() => import('./components/Reg_Validate/Itens/NavItens'))
const PagePrincipal = React.lazy(() => import('./components/home/home'));


const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Pagina Inicial', component: PagePrincipal },
  { path: '/reg_validate/itens', name: 'Componentes do Reg_Validate', component: RegValidateItens }
];

export default routes;
