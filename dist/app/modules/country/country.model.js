"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const countrySchema = new mongoose_1.Schema({
    id: {
        type: Number,
    },
    name: {
        type: String,
    },
    iso2: {
        type: String,
    },
    iso3: {
        type: String,
    },
    phoneCode: {
        type: String,
    },
    capital: {
        type: String,
    },
    currency: {
        type: String,
    },
    emoji: {
        type: String,
    },
    emojiU: {
        type: String,
    },
}, { timestamps: true });
const Country = (0, mongoose_1.model)("Country", countrySchema);
exports.default = Country;
