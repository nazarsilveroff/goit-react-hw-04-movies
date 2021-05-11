import React from "react";
import { NavLink } from "react-router-dom";
import mainRoutes from "../../../routes/mainRoutes";
import { NavigationContainer } from "./NavigationStyled";
const Navigation = () => {
  return (
    <NavigationContainer>
      <ul className="list">
  
          {mainRoutes.map((route) => (
            <li className="listItem" key={route.path}>
              <NavLink
                to={route.path}
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

export default Navigation;
