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
exports.StateService = void 0;
const queryBuilder_1 = require("../../utils/queryBuilder");
const state_model_1 = __importDefault(require("./state.model"));
const getStateByCountryId = (countryId, params) => __awaiter(void 0, void 0, void 0, function* () {
    const builder = new queryBuilder_1.QueryBuilder(state_model_1.default, Object.assign(Object.assign({}, params), { country_id: countryId }));
    const data = yield builder.filter().search(["name"]).sort().exec();
    return data;
});
exports.StateService = { getStateByCountryId };
