import { QueryBuilder } from "../../utils/queryBuilder";
import Country from "./country.model";

const getAllCountry = async (params: Record<string, string>) => {
  const countries = new QueryBuilder(Country, params);
  const data = await countries
    .filter()
    .search([
      "name",
      "iso2",
      "iso3",
      "phoneCode",
      "capital",
      "currency",
      "emoji",
      "emojiU",
    ])
    .sort()
    .exec();

  return data;
};

export const CountryService = { getAllCountry };
