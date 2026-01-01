import City from "./city.model";

const getCityByStateId = async (stateId: string) => {
  const totalDoc = await City.countDocuments();
  return await City.aggregate([
    {
      $match: {
        $expr: {
          $eq: [{ $toString: "$state_id" }, stateId],
        },
      },
    },
    {
      $sort: { name: 1 },
    },
  ]);
};

const getAllCityByCountryId = async (countryId: string) => {
  const totalDoc = await City.countDocuments();
  return await City.aggregate([
    {
      $match: {
        $expr: {
          $eq: [{ $toString: "$country_id" }, countryId],
        },
      },
    },
    {
      $sort: { name: 1 },
    },
  ]);
};

export const CityService = { getCityByStateId, getAllCityByCountryId };
