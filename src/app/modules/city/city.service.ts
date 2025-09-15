import City from "./city.model";

const getCityByStateId = async (stateId: number) => {
  return await City.find({ state_id: stateId });
};

export const CityService = { getCityByStateId };
