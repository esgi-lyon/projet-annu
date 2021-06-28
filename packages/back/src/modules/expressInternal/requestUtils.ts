import { Response as ExpressResponse } from "express";

export interface QueryReturn {
  data: object;
  status: number;
}

/**
 * Helper function to chain the status definition to the data fetched
 *
 * @param {ExpressRequest} res Request object
 * @param {object} queryReturn Status and data to use in request
 */
export function jsonWithStatus(
  res: ExpressResponse,
  { status, data }: QueryReturn
): void {
  res.status(status).json(data);
}
