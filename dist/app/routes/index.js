"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const country_routes_1 = __importDefault(require("../modules/country/country.routes"));
const state_routes_1 = __importDefault(require("../modules/state/state.routes"));
const city_routes_1 = __importDefault(require("../modules/city/city.routes"));
const router = express_1.default.Router();
const moduleRoutes = [
    {
        path: "/country",
        route: country_routes_1.default,
    },
    {
        path: "/state",
        route: state_routes_1.default,
    },
    {
        path: "/city",
        route: city_routes_1.default,
    },
];
moduleRoutes.forEach((route) => {
    router.use(route.path, route.route);
});
exports.default = router;
