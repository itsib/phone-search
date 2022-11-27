import { HTTPException } from '@tsed/exceptions';
import { NextFunction, Request, Response } from 'express';

export const errorMiddleware = (error: HTTPException, req: Request, res: Response, next: NextFunction) => {
  res.status(error.status).json({ status: error.status, message: error.message });
};
