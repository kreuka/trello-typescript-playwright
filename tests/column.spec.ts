import Column from "../page-objects/components/Column";
import { loggedUserWithBoardFixture } from "../fixtures/loggerUserWithBoardFixture";
import BoardPage from "../page-objects/pages/BoardPage";

loggedUserWithBoardFixture("@TC-3, Verify the ability to create a column",  async ({ page, board }) => {
  const boardPage = new BoardPage(page);
  await boardPage.navigate(board.url);
  
  const columnName = "Column 1";
  const column = new Column(page);
  await column.addNewColumn(columnName);
  await column.clickOnCloseIcon();

  await column.verifyColumnCount(1);
  await column.verifyColumnTitle(columnName);
});
