"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const stateSchema = new mongoose_1.Schema({
    id: {
        type: Number,
    },
    name: {
        type: String,
    },
    iso2: {
        type: String,
    },
    iso3166_2: {
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
    fips_code: {
        type: String,
    },
    latitude: {
        type: String,
    },
    longitude: {
        type: String,
    },
    level: {
        type: mongoose_1.Schema.Types.Mixed,
    },
    parent_id: {
        type: mongoose_1.Schema.Types.Mixed,
    },
    type: {
        type: String,
    },
    timezone: {
        type: String,
    },
});
const State = (0, mongoose_1.model)("State", stateSchema);
exports.default = State;
