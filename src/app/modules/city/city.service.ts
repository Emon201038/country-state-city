import { QueryBuilder } from "../../utils/queryBuilder";
import City from "./city.model";

const getCityByStateId = async (
  stateId: number,
  params: Record<string, string>
) => {
  const builder = new QueryBuilder(City, {
    ...params,
    state_id: stateId.toString(),
  });
  const data = await builder.filter().search(["name"]).sort().exec();
  return data;
};

const getAllCity = async (
  params: Record<string, string>,
  countryId: string
) => {
  const cities = new QueryBuilder(City, { ...params, country_id: countryId });
  const data = await cities.filter().search(["name"]).sort().exec();
  return data;
};

export const CityService = { getCityByStateId, getAllCity };
