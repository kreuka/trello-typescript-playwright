import { loggedUserWithBoardFixture } from "./loggedUserWithBoardFixture";
import { CreateColumnResponse } from "../api/types/CreateColumnResponse";
import { ColumnBuilder } from "../api/builders/entities/columnBuilder";
import { ColumnController } from "../api/controllers/column.controller";
import DataGenerator from "../helpers/DataGenerator";

export const loggedUserWithColumnFixture = loggedUserWithBoardFixture.extend<{ column: CreateColumnResponse }>({
  column: async ({ request, board }, use) => {
    const columnBody = new ColumnBuilder()
      .setName(DataGenerator.getPhrase())
      .build();

    const createColumnResponse = await new ColumnController(request).createColumn(board.id, columnBody);

    await use(createColumnResponse);
  },
});
