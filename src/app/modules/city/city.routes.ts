import express from "express";
import { CityController } from "./city.controller";

const cityRouter = express.Router();

cityRouter.get("/:stateId", CityController.getCityByStateId);

export default cityRouter;
