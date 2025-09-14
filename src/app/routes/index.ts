import express from "express";
import countryRouter from "../modules/country/country.routes";

const router = express.Router();

const moduleRoutes = [
  {
    path: "/country",
    route: countryRouter,
  },
];

moduleRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

export default router;
