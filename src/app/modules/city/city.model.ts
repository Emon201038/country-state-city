import { model, Schema } from "mongoose";
import { ICity } from "./city.interface";

const citySchema = new Schema<ICity>({
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

const City = model<ICity>("City", citySchema);

export default City;
