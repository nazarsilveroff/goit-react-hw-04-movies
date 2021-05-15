import React from "react";
import { NavLink, withRouter } from "react-router-dom";
import mainRoutes from "../../../routes/mainRoutes";
import { NavigationContainer } from "./NavigationStyled";
const Navigation = ({ location }) => {

  return (
    <NavigationContainer>
      <ul className="list">
        {mainRoutes.map(route => (
          <li className="listItem" key={route.path}>
            <NavLink
              to={{
                pathname: route.path,
                state: {from: location.pathname},
              }}
              className="link"
              activeClassName="activeLink"
              exact={route.exact}
            >
              {route.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </NavigationContainer>
  );
  
};

export default withRouter(Navigation);
