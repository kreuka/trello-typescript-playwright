import { loggedUserFixture as base } from "./loggedUserFixture";
import { BoardBuilder } from "../api/builders/entities/boardBuilder";
import { BoardController } from "../api/controllers/board.controller";
import { CreateBoardResponse } from "../api/types/CreateBoardResponse";
import { randomUUID } from "crypto";

export const loggedUserWithBoardFixture = base.extend<{ board: CreateBoardResponse }>({
  board: async ({ request }, use) => {
    const boardBody = new BoardBuilder()
      .setName(`${randomUUID()}_board`)
      .setDefaultLists(false)
      .build();

    const createBoardResponse = await new BoardController(request).createBoard(boardBody);

    await use(createBoardResponse);

    await new BoardController(request).deleteBoard(createBoardResponse.id);
  }
});
