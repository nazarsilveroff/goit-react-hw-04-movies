import HomePage from "../pages/homePage/HomePage";
import MovieDetailsPage from "../pages/movieDetailsPage/MovieDetailsPage";

import MoviesPage from "../pages/moviesPage/MoviesPage";

const mainRoutes = [
  {
    name: "Home",
    path: "/",
    exact: true,
    component: HomePage,
  },
  {
    name: "Movies",
    path: "/movies",
    exact: true,
    component: MoviesPage,
  },
  {
    name: "",
    path: "/movies/:muvieId",
    exact: false,
    component: MovieDetailsPage,
  },
];
export default mainRoutes;
