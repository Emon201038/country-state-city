import { NextFunction, Request, Response } from "express";
import { catchAsync } from "../../utils/catchAsync";
import { sendResponse } from "../../utils/sendResponse";
import { CountryService } from "./country.service";

const getAllCountry = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    sendResponse(res, {
      success: true,
      statusCode: 200,
      message: "Country route",
      data: await CountryService.getAllCountry(
        req.query as Record<string, string>
      ),
    });
  }
);

export const CountryController = { getAllCountry };
