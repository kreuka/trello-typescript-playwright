import { APIResponse } from "@playwright/test";
import { APIRoutes } from "../../utils/constants/routes";
import { CreateBoard } from "../builders/entities/boardBuilder";
import { CreateBoardResponse } from "../types/CreateBoardResponse";
import { BaseController } from "./base.controller";
import { GetBoardsMemberBelongsToResponse } from "../types/GetBoardsMemberBelongsToResponse";

export class BoardController extends BaseController {
  async createBoard(data: CreateBoard): Promise<CreateBoardResponse> {
    return await this.request()
      .setUrl(`${process.env.API_BASE_URL}${APIRoutes.Boards}`)
      .setMethod("POST")
      .setData(data)
      .send() as Promise<CreateBoardResponse>;
  }

  async deleteBoardById(boardId: string): Promise<APIResponse> {
    return await this.request()
      .setUrl(`${process.env.API_BASE_URL}${APIRoutes.Boards}/${boardId}`)
      .setMethod("DELETE")
      .send() as Promise<APIResponse>;
  }

  async deleteBoardByTitle(boardTitle: string): Promise<void> {
    const boardId = await this.getBoardIdByTitle(boardTitle);
    if (boardId) await this.deleteBoardById(boardId);
  }

  async getBoardsMemberBelongsTo(memberId: string = process.env.TRELLO_MEMBER_ID!): Promise<GetBoardsMemberBelongsToResponse[]> {  
    return await this.request()
      .setUrl(`${process.env.API_BASE_URL}${APIRoutes.Members}/${memberId}${APIRoutes.Boards}`)
      .setMethod("GET")
      .send() as Promise<GetBoardsMemberBelongsToResponse[]>;
  }

  async getBoardIdByTitle(boardTitle: string): Promise<string | undefined> {
    const allBoards: GetBoardsMemberBelongsToResponse[] = await this.getBoardsMemberBelongsTo();
    const board = allBoards.find((board) => board.name === boardTitle);
    return board ? board.id : undefined;
  }
}
