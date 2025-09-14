import express from "express";
import { CountryController } from "./country.controller";

const countryRouter = express.Router();

countryRouter.get("/", CountryController.getAllCountry);

export default countryRouter;
