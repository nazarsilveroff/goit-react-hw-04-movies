import React from "react";
import { Route, Switch } from "react-router-dom";
import mainRoutes from "../../routes/mainRoutes";

const Main = () => {
  return (
    <>
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
    </>
  );
};

export default Main;
