import { NextFunction, Request, Response } from "express";
import { catchAsync } from "../../utils/catchAsync";
import { sendResponse } from "../../utils/sendResponse";
import { StateService } from "./state.service";

const getStateByCountryId = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    sendResponse(res, {
      success: true,
      statusCode: 200,
      message: "State route",
      data: await StateService.getStateByCountryId(
        req.params.countryId,
        req.query as Record<string, string>
      ),
    });
  }
);

export const StateController = { getStateByCountryId };
