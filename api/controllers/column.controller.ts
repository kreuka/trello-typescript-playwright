import { APIRoutes } from "../../utils/constants/routes";
import { CreateColumn } from "../builders/entities/columnBuilder";
import { CreateColumnResponse } from "../types/CreateColumnResponse";
import { BaseController } from "./base.controller";

export class ColumnController extends BaseController {
  async createColumn(boardId: string, data: CreateColumn): Promise<CreateColumnResponse> {
    return await this.request()
      .setUrl(`${process.env.API_BASE_URL}${APIRoutes.Boards}/${boardId}${APIRoutes.Columns}`)
      .setMethod("POST")
      .setData(data)
      .send() as Promise<CreateColumnResponse>;
  }
}
