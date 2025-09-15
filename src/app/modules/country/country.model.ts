import { model, Schema } from "mongoose";
import { ICountry } from "./country.interface";

const countrySchema = new Schema<ICountry>(
  {
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
  },
  { timestamps: true }
);

const Country = model<ICountry>("Country", countrySchema);
export default Country;
