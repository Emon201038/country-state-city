import { QueryBuilder } from "../../utils/queryBuilder";
import State from "./state.model";

const getStateByCountryId = async (
  countryId: string,
  params: Record<string, string>
) => {
  const builder = new QueryBuilder(State, { ...params, country_id: countryId });
  const data = await builder.filter().search(["name"]).sort().exec();
  return data;
};

export const StateService = { getStateByCountryId };
