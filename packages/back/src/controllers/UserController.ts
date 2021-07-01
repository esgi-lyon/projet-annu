import {
  Response,
  Params,
  Controller,
  Get,
  Query,
  Put,
  Body,
  Delete,
  Patch,
} from "@decorators/express";
import UserModel, { UserDocument } from "../models/User";
import { Response as ExpressResponse } from "express";
import { CRLUD } from "../modules/mongodb/types";
import { CrudService } from "../modules/mongodb";
import { jsonWithStatus } from "../modules/expressInternal";
import { Injectable } from "@decorators/di";
import { FilterQuery } from "mongoose";
import { TokenProtectedMiddleware } from "../modules/oauth/middlewares/PassportMiddleware";

@Controller("/users", [TokenProtectedMiddleware])
@Injectable()
export default class UserController implements CRLUD {
  private readonly crudService: CrudService = new CrudService(UserModel);

  /**
   * List all users
   * Param override query
   */
  @Get("/:_id")
  async read(
    @Query() query: FilterQuery<UserDocument>,
    @Response() res: any,
    @Params("_id") _id: string | undefined
  ): Promise<void> {
    jsonWithStatus(res, await this.crudService.read(query, { _id }));
  }

  /**
   * Show a single user or all
   */
  @Get("/")
  async list(
    @Query() query: FilterQuery<UserDocument>,
    @Response() res: ExpressResponse
  ): Promise<void> {
    await this.read(query ?? {}, res, undefined);
  }

  /**
   * Optimal Create
   */
  @Put("/")
  async create(
    @Body() body: UserDocument | UserDocument[],
    @Response() res: ExpressResponse
  ): Promise<void> {
    jsonWithStatus(res, await this.crudService.create(body));
  }

  /**
   * Update when knowning entity
   */
  @Patch("/:_id")
  async update(
    @Body() body: UserDocument,
    @Response() res: ExpressResponse,
    @Params("_id") _id: string
  ): Promise<void> {
    jsonWithStatus(res, await this.crudService.update({ _id }, body));
  }

  /**
   * Delete an entity
   */
  @Delete("/:_id")
  async delete(
    @Query() query: FilterQuery<UserDocument>,
    @Response() res: ExpressResponse,
    @Params("_id") _id: string
  ): Promise<void> {
    jsonWithStatus(res, await this.crudService.delete({ ...query, _id }));
  }
}
