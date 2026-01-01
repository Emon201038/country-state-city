import express from "express";
import { CityController } from "./city.controller";

const cityRouter = express.Router();

cityRouter.get("/country/:countryId", CityController.getAllCity);
cityRouter.get("/:stateId", CityController.getCityByStateId);

export default cityRouter;
