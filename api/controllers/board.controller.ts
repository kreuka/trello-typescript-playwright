import { APIResponse } from "@playwright/test";
import { APIRoutes } from "../../utils/constants/routes";
import { CreateBoard } from "../builders/entities/boardBuilder";
import { CreateBoardResponse } from "../types/CreateBoardResponse";
import { BaseController } from "./base.controller";

export class BoardController extends BaseController {
  async createBoard(data: CreateBoard): Promise<CreateBoardResponse> {
    return await this.request()
      .setUrl(`${process.env.API_BASE_URL}${APIRoutes.Boards}`)
      .setMethod("POST")
      .setData(data)
      .send() as Promise<CreateBoardResponse>;
  }

  async deleteBoard(boardId: string): Promise<APIResponse> {
    return await this.request()
      .setUrl(`${process.env.API_BASE_URL}${APIRoutes.Boards}/${boardId}`)
      .setMethod("DELETE")
      .send() as Promise<APIResponse>;
  }
}
