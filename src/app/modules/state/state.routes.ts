import express from "express";
import { StateController } from "./state.controller";

const stateRouter = express.Router();

stateRouter.get("/:countryId", StateController.getStateByCountryId);

export default stateRouter;
