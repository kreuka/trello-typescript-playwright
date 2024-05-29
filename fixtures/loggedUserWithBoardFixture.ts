import { loggedUserFixture } from "./loggedUserFixture";
import { BoardBuilder } from "../api/builders/entities/boardBuilder";
import { BoardController } from "../api/controllers/board.controller";
import { CreateBoardResponse } from "../api/types/CreateBoardResponse";
import BoardPage from "../page-objects/pages/BoardPage";
import DataGenerator from "../helpers/DataGenerator";

export const loggedUserWithBoardFixture = loggedUserFixture.extend<{ board: CreateBoardResponse, boardPage: BoardPage }>({
  board: async ({ request }, use) => {
    const boardBody = new BoardBuilder()
      .setName(DataGenerator.getPhrase())
      .setDefaultLists(false)
      .build();

    const createBoardResponse = await new BoardController(request).createBoard(boardBody);

    await use(createBoardResponse);

    await new BoardController(request).deleteBoardById(createBoardResponse.id);
  },
  boardPage: async ({ page }, use) => {
    const boardPage = new BoardPage(page);
    await use(boardPage);
  },
});
