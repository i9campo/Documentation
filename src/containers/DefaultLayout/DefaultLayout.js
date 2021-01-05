import React, { Component, Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import * as router from 'react-router-dom';
import { Container } from 'reactstrap';
import { AppAside, AppFooter, AppHeader, AppSidebar, AppSidebarFooter, AppSidebarForm, AppSidebarHeader, AppSidebarMinimizer, AppBreadcrumb2 as AppBreadcrumb, AppSidebarNav2 as AppSidebarNav,} from '@coreui/react';
import navigation from '../../_nav';
import routes from '../../routes';


const DefaultAside = React.lazy(() => import('./DefaultAside'));
const DefaultFooter = React.lazy(() => import('./DefaultFooter'));
const DefaultHeader = React.lazy(() => import('./DefaultHeader'));

class DefaultLayout extends Component {

  loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>

  signOut(e) {
    e.preventDefault()
    this.props.history.push('/login')
  }

  render() {
    return (
      <div className="app" >
        
        <AppHeader fixed>
          <Suspense  fallback={this.loading()}>
            <DefaultHeader className="black-header" onLogout={e=>this.signOut(e)}/>
          </Suspense>
        </AppHeader>

       <div className="app-body">
          <AppSidebar fixed display="lg">
            <AppSidebarHeader />
            <AppSidebarForm />
            <Suspense>
            <AppSidebarNav navConfig={navigation} {...this.props} router={router}/>
            </Suspense>
            <AppSidebarFooter />
            <AppSidebarMinimizer />
          </AppSidebar>
          {/* <main className="main" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/MOf9Kxxkj7GvyZlTZOnUzuYv0JAweEhlxJX6gslQvbvlhLK5_bSTK6duxY2xfbBsj43H=w300')" }} > */}
          <main className="main" style={{ backgroundImage: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTeWRbf3__UtMdIB8nHgrHtiybeKcdP26TeFFgVL6Up7Oh_GVJu')" }} >
            <AppBreadcrumb appRoutes={routes} router={router} />
            <Container fluid style={{paddingLeft:0, paddingRight: 0, marginLeft:0, marginRight: 0, paddingTop: 0, marginTop:0}}>
              <Suspense fallback={this.loading()}>
                <Switch>
                  {routes.map((route, idx) => {
                    return route.component ? (
                      <Route
                        key={idx}
                        path={route.path}
                        exact={route.exact}
                        name={route.name}
                        render={props => (
                          <route.component {...props} />
                        )} />
                    ) : (null);
                  })}
                  <Redirect from="/" to="/dashboard" />
                </Switch>
              </Suspense>
            </Container>
          </main>
          <AppAside fixed>
            <Suspense fallback={this.loading()}>
              <DefaultAside />
            </Suspense>
          </AppAside>
        </div> 
        <AppFooter>
          <Suspense fallback={this.loading()}>
            <DefaultFooter />
          </Suspense>
        </AppFooter>
      </div>
    );
  }
}

export default DefaultLayout;
