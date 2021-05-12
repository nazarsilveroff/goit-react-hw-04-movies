import React, { Suspense } from "react";
import Loader from "react-loader-spinner";
import { Route, Switch } from "react-router-dom";
import mainRoutes from "../../routes/mainRoutes";

const Main = () => {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Switch>
          {mainRoutes.map((route) => (
            <Route
              path={route.path}
              exact={route.exact}
              component={route.component}
              key={route.path}
            />
          ))}
        </Switch>
      </Suspense>
    </>
  );
};

export default Main;
