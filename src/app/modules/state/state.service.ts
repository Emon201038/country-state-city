import State from "./state.model";

const getStateByCountryId = async (countryId: string) => {
  return await State.find({ country_id: countryId });
};

export const StateService = { getStateByCountryId };
