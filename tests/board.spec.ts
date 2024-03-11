import { loggedUserFixture } from "../fixtures/loggedUserFixture";
import Header from "../page-objects/components/Header";
import HeaderCreateMenu from "../page-objects/components/HeaderCreateMenu";
import BoardPage from "../page-objects/pages/BoardPage";

loggedUserFixture("Verify the ability to create a board", async ({ page }) => {
  const header = new Header(page);
  await header.clickOnCreate();
  await header.chooseCreateBoardOptionFromCreateDropdown();
  
  const headerCreateMenu = new HeaderCreateMenu(page);
  const boardTitle = "My board 1";
  await headerCreateMenu.fillBoardTitle(boardTitle);
  await headerCreateMenu.clickOnCreateBoardButton();

  const boardPage = new BoardPage(page);
  await boardPage.verifyBoardTitle(boardTitle);
});
