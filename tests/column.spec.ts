import { loggedUserWithBoardFixture } from "../fixtures/loggerUserWithBoardFixture";

loggedUserWithBoardFixture("@TC-3, Verify the ability to create a column",  async ({ board, boardPage }) => {
  await boardPage.navigate(board.url);
  
  const columnName = "Column 1";
  await boardPage.column.addNewColumn(columnName);
  await boardPage.column.clickOnCloseIcon();

  await boardPage.column.verifyColumnCount(1);
  await boardPage.column.verifyColumnTitle(columnName);
});
