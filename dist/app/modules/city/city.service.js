"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CityService = void 0;
const city_model_1 = __importDefault(require("./city.model"));
const getCityByStateId = (stateId, params) => __awaiter(void 0, void 0, void 0, function* () {
    return city_model_1.default.aggregate([
        {
            $match: {
                state_id: parseInt(stateId), // MUST match schema type
            },
        },
        {
            $sort: { name: 1 }, // optional
        },
    ]);
});
const getAllCityByCountryId = (countryId, params) => __awaiter(void 0, void 0, void 0, function* () {
    return city_model_1.default.aggregate([
        {
            $match: {
                country_id: parseInt(countryId), // MUST match schema type
            },
        },
        {
            $sort: { name: 1 }, // optional
        },
    ]);
});
exports.CityService = { getCityByStateId, getAllCityByCountryId };
