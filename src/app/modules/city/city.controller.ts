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
        Number(req.params.stateId),
        req.query as Record<string, string>
      ),
    });
  }
);

const getAllCity = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    sendResponse(res, {
      success: true,
      statusCode: 200,
      message: "City route",
      data: await CityService.getAllCity(
        req.query as Record<string, string>,
        req.params.countryId
      ),
    });
  }
);

export const CityController = { getCityByStateId, getAllCity };
