"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const state_controller_1 = require("./state.controller");
const stateRouter = express_1.default.Router();
stateRouter.get("/:countryId", state_controller_1.StateController.getStateByCountryId);
exports.default = stateRouter;
