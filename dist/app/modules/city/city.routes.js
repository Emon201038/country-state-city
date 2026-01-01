"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const city_controller_1 = require("./city.controller");
const cityRouter = express_1.default.Router();
cityRouter.get("/country/:countryId", city_controller_1.CityController.getAllCity);
cityRouter.get("/state/:stateId", city_controller_1.CityController.getCityByStateId);
exports.default = cityRouter;
