import React, { Fragment } from "react";
import { HomePage, Page1, Page2 } from "src/pages";
import { Switch, Route } from "react-router-dom";
import { DefaultLayout } from "src/layout/index";
export const renderRoutes = (routers: Routes = []): JSX.Element => {
  return (
    <Switch>
      {routers.map((route, i) => {
        const Guard = route.guard || Fragment;
        const Layout = route.layout || Fragment;
        const Component = route.component;
        return (
          <Route
            key={i}
            path={route.path}
            exact={route.exact}
            render={(props) => {
              return (
                <Guard>
                  <Layout>
                    {route.routers ? (
                      renderRoutes(route.routers)
                    ) : (
                      <Component {...props} />
                    )}
                  </Layout>
                </Guard>
              );
            }}
          />
        );
      })}
    </Switch>
  );
};

const routes: Routes = [
  {
    layout: DefaultLayout,
    path: "/",
    exact: true,
    component: HomePage,
  },
  {
    layout: DefaultLayout,
    path: "/page1",
    exact: true,
    component: Page1,
  },
  {
    layout: DefaultLayout,
    path: "/page2",
    exact: true,
    component: Page2,
  },
];
export default routes;
