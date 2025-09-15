import express from "express";
import countryRouter from "../modules/country/country.routes";
import stateRouter from "../modules/state/state.routes";
import cityRouter from "../modules/city/city.routes";

const router = express.Router();

const moduleRoutes = [
  {
    path: "/country",
    route: countryRouter,
  },
  {
    path: "/state",
    route: stateRouter,
  },
  {
    path: "/city",
    route: cityRouter,
  },
];

moduleRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

export default router;
