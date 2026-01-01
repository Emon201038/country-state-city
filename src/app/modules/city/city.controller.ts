import { NextFunction, Request, Response } from "express";
import { catchAsync } from "../../utils/catchAsync";
import { sendResponse } from "../../utils/sendResponse";
import { CityService } from "./city.service";

const getCityByStateId = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    sendResponse(res, {
      success: true,
      statusCode: 200,
      message: "City route",
      data: await CityService.getCityByStateId(
        req.params.stateId,
        req.query as Record<string, string>
      ),
    });
  }
);

const getAllCityByCountryId = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const data = await CityService.getAllCityByCountryId(
      req.params.countryId,
      req.query as Record<string, string>
    );
    sendResponse(res, {
      success: true,
      statusCode: 200,
      message: "City route",
      data,
    });
  }
);

export const CityController = { getCityByStateId, getAllCityByCountryId };
