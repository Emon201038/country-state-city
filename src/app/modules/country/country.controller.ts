import { NextFunction, Request, Response } from "express";
import { catchAsync } from "../../utils/catchAsync";
import { sendResponse } from "../../utils/sendResponse";

const getAllCountry = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    sendResponse(res, {
      success: true,
      statusCode: 200,
      message: "Country route",
      data: [],
    });
  }
);

export const CountryController = { getAllCountry };
