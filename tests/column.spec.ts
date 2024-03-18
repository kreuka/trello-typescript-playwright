import Header from "../page-objects/components/Header";
import HeaderCreateMenu from "../page-objects/components/HeaderCreateMenu";
import Column from "../page-objects/components/Column";
import { loggedUserFixture } from "../fixtures/loggedUserFixture";

loggedUserFixture("@TC-3, Verify the ability to create a column",  async ({ page }) => {
  // create a board
  const header = new Header(page);
  await header.clickOnCreate();
  await header.chooseCreateBoardOptionFromCreateDropdown();
  
  const headerCreateMenu = new HeaderCreateMenu(page);
  const boardTitle = "My board 1";
  await headerCreateMenu.fillBoardTitle(boardTitle);
  await headerCreateMenu.clickOnCreateBoardButton();

  // test
  const columnName = "Column 1";
  const column = new Column(page);
  await column.clickOnCloseIcon();

  await column.addNewColumn(columnName);
  await column.clickOnCloseIcon();

  await column.verifyColumnCount(1);
  await column.verifyColumnTitle(columnName);
});
