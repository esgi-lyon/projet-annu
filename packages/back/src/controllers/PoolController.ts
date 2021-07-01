import {
  Response,
  Params,
  Controller,
  Get,
  Query,
  Put,
  Patch,
  Delete,
  Body,
} from "@decorators/express";
import { Response as ExpressResponse } from "express";
import HotelModel, { PoolDocument } from "../models/Pool";
import { CRLUD } from "../modules/mongodb/types";
import { CrudService } from "../modules/mongodb";
import { Injectable } from "@decorators/di";
import { jsonWithStatus } from "../modules/expressInternal";
import { FilterQuery } from "mongoose";
import { TokenProtectedMiddleware } from "../modules/oauth/middlewares/PassportMiddleware";

@Injectable()
@Controller("/courses/pools", [TokenProtectedMiddleware])
export default class HotelController implements CRLUD {
  private readonly crudService: CrudService = new CrudService(HotelModel);

  @Get("/:_id")
  async read(
    @Query() query: FilterQuery<PoolDocument>,
    @Response() res: ExpressResponse,
    @Params("_id") _id: string | undefined
  ): Promise<void> {
    jsonWithStatus(res, await this.crudService.read(query, { _id }));
  }

  @Put("/")
  async create(
    @Body() body: PoolDocument | PoolDocument[],
    @Response() res: ExpressResponse
  ): Promise<void> {
    jsonWithStatus(res, await this.crudService.create(body));
  }

  @Get("/")
  async list(
    @Query() query: FilterQuery<PoolDocument>,
    @Response() res: ExpressResponse
  ): Promise<void> {
    await this.read(query ?? {}, res, undefined);
  }

  @Patch("/:_id")
  async update(
    @Body() body: PoolDocument,
    @Response() res: ExpressResponse,
    @Params("_id") _id: string
  ): Promise<void> {
    jsonWithStatus(res, await this.crudService.update({ _id }, body));
  }

  @Delete("/")
  async delete(
    @Query() query: FilterQuery<PoolDocument>,
    @Response() res: ExpressResponse,
    @Params("_id") _id: string
  ): Promise<void> {
    jsonWithStatus(res, await this.crudService.delete({ ...query, _id }));
  }
}
