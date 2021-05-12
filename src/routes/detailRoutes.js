import { lazy } from "react";
// import Cast from "../Components/ditails/Cast";
// import Reviews from "../Components/ditails/Reviews";

const detailRoutes = [
  {
    name: "Cast",
    path: "/cast",
    exact: true,
    component: lazy(
      () => import("../Components/ditails/Cast")
      /*webpackChunkName:'Cast'*/
    ),
  },
  {
    name: "Reviews",
    path: "/reviews",
    exact: true,
    component: lazy(
      () => import("../Components/ditails/Reviews")
      /*webpackChunkName:'Reviews'*/
    ),
  },
];
export default detailRoutes;
