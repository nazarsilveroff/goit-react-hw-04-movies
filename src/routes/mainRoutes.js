import { lazy } from "react";

const mainRoutes = [
  {
    name: "Home",
    path: "/",
    exact: true,
    component: lazy(() =>
      import("../pages/homePage/HomePage" /*webpackChunkName:'HomePages'*/)
    ),
  },
  {
    name: "Movies",
    path: "/movies",
    exact: true,
    component: lazy(() =>
      import("../pages/moviesPage/MoviesPage" /*webpackChunkName:'HomePages'*/)
    ),
  },
  {
    name: "",
    path: "/movies/:movieId",
    exact: false,
    component: lazy(() =>
      import(
        "../pages/movieDetailsPage/MovieDetailsPage" /*webpackChunkName:'HomePages'*/
      )
    ),
  },
];
export default mainRoutes;
