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
exports.CountryService = void 0;
const queryBuilder_1 = require("../../utils/queryBuilder");
const country_model_1 = __importDefault(require("./country.model"));
const getAllCountry = (params) => __awaiter(void 0, void 0, void 0, function* () {
    const countries = new queryBuilder_1.QueryBuilder(country_model_1.default, params);
    const data = yield countries
        .filter()
        .search([
        "name",
        "iso2",
        "iso3",
        "phoneCode",
        "capital",
        "currency",
        "emoji",
        "emojiU",
    ])
        .sort()
        .exec();
    return data;
});
const getCountryById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield country_model_1.default.findOne({ id });
});
exports.CountryService = { getAllCountry, getCountryById };
