import { Document } from "mongoose";

export interface IState extends Document {
  id: number;
  name: string;
  iso2: string;
  iso3166_2: string;
  country_id: number;
  country_code: string;
  country_name: string;
  fips_code: string;
  latitude: string;
  longitude: string;
  level: any;
  parent_id: any;
  type: string;
  timezone: string;
}
