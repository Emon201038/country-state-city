import { Document } from "mongoose";

export interface ICountry extends Document {
  id: number;
  name: string;
  iso2: string;
  iso3: string;
  phoneCode: string;
  capital: string;
  currency: string;
  emoji: string;
  emojiU: string;
}
