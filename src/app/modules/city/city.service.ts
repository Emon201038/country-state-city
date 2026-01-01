import City from "./city.model";

const getCityByStateId = async (
  stateId: string,
  params: Record<string, string>
) => {
  return City.aggregate([
    {
      $match: {
        state_id: parseInt(stateId), // MUST match schema type
      },
    },
    {
      $sort: { name: 1 }, // optional
    },
  ]);
};

const getAllCityByCountryId = async (
  countryId: string,
  params: Record<string, string>
) => {
  return City.aggregate([
    {
      $match: {
        country_id: parseInt(countryId), // MUST match schema type
      },
    },
    {
      $sort: { name: 1 }, // optional
    },
  ]);
};

export const CityService = { getCityByStateId, getAllCityByCountryId };
