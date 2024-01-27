import { NextFunction, Request, Response } from "express";

type AsyncFunction = (
  req: Request,
  res: Response,
  next: NextFunction
) => Promise<any>;

function asyncHandler(asyncFunction: AsyncFunction) {
  return function fn(req: Request, res: Response, next: NextFunction) {
    Promise.resolve(asyncFunction(req, res, next)).catch((err) => next(err));
  };
}

export { asyncHandler };
