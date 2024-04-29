import { loggedUserFixture } from "../fixtures/loggedUserFixture";
import BoardPage from "../page-objects/pages/BoardPage";

loggedUserFixture("@TC-2, Verify the ability to create a board", async ({  page, homePage }) => {
  // TODO delete a created board
  await homePage.header.clickOnCreate();
  await homePage.header.chooseCreateBoardOptionFromCreateDropdown();

  const boardTitle = "My board 1";
  await homePage.header.createMenu.fillBoardTitle(boardTitle);
  await homePage.header.createMenu.clickOnCreateBoardButton();
  
  const boardPage = new BoardPage(page);
  await boardPage.verifyBoardTitle(boardTitle);
});
