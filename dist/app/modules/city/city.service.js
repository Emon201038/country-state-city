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
const queryBuilder_1 = require("../../utils/queryBuilder");
const city_model_1 = __importDefault(require("./city.model"));
const getCityByStateId = (stateId, params) => __awaiter(void 0, void 0, void 0, function* () {
    const builder = new queryBuilder_1.QueryBuilder(city_model_1.default, Object.assign(Object.assign({}, params), { state_id: stateId.toString() }));
    const data = yield builder.filter().search(["name"]).sort().exec();
    return data;
});
exports.CityService = { getCityByStateId };
