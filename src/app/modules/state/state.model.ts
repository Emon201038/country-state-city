import { model, Schema } from "mongoose";
import { IState } from "./state.interface";

const stateSchema = new Schema<IState>({
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
    type: Schema.Types.Mixed,
  },
  parent_id: {
    type: Schema.Types.Mixed,
  },
  type: {
    type: String,
  },
  timezone: {
    type: String,
  },
});

const State = model<IState>("State", stateSchema);

export default State;
