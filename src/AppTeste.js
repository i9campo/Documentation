import React, { Component } from 'react';
import { HashRouter, Route, Switch,Redirect } from 'react-router-dom';
// import { renderRoutes } from 'react-router-config';
import './App.scss';
// import routes from './routes.js'
const loading = () => <div className="animated fadeIn pt-3 text-center">Loading...</div>;

//Core UI
//https://github.com/coreui/coreui-free-react-admin-template

// Containers
const DefaultLayout = React.lazy(() => import('./containers/DefaultLayout'));

// Pages
const Login = React.lazy(() => import('./components/Login/Login.js'));
// const Login = React.lazy(() => import('./views/Pages/Login'));
// const Login = React.lazy(() => import('./components/Login/Login'));
//const Register = React.lazy(() => import('./views/Pages/Register'));
const CadUsuario = React.lazy(() => import('./components/Usuario/CadUsuario'));
const Page404 = React.lazy(() => import('./views/Pages/Page404'));
const Page500 = React.lazy(() => import('./views/Pages/Page500'));

class App extends Component {

constructor(props)
{
  super(props);
  //auth.check();
}

  render() {
    return (
      <HashRouter>
          <React.Suspense fallback={loading()}>
            <Switch>
              <Route exact path="/login" name="Login Page" render={props => <Login {...props}/>} />
              <Route exact path="/registro" name="Regristro" render={props => <CadUsuario {...props}/>} />
              <Route exact path="/404" name="Page 404" render={props => <Page404 {...props}/>} />
              <Route exact path="/500" name="Page 500" render={props => <Page500 {...props}/>} />
              <Route path="/" name="Home" render={props => <DefaultLayout {...props}/>} />
            </Switch>
          </React.Suspense>
      </HashRouter>
    );
  }
}

export default App;
