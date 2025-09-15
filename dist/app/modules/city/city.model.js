"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const citySchema = new mongoose_1.Schema({
    id: {
        type: Number,
    },
    name: {
        type: String,
    },
    country_id: {
        type: Number,
    },
    country_code: {
        type: String,
    },
    country_name: {
        type: String,
    },
    state_id: {
        type: Number,
    },
    state_code: {
        type: String,
    },
    state_name: {
        type: String,
    },
    latitude: {
        type: String,
    },
    longitude: {
        type: String,
    },
    wikiDataId: {
        type: String,
    },
});
const City = (0, mongoose_1.model)("City", citySchema);
exports.default = City;
