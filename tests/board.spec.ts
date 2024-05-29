import { loggedUserFixture } from "../fixtures/loggedUserFixture";
import { loggedUserWithBoardFixture } from "../fixtures/loggedUserWithBoardFixture";
import DataGenerator from "./../helpers/DataGenerator";
import BoardPage from "../page-objects/pages/BoardPage";
import test from "@playwright/test";
import { BoardController } from "../api/controllers/board.controller";

let boardTitle: string;

test.describe("Board Tests that requires board deletion not in a fixture", () => {
  test.afterEach(async ({ request }) => {
    if (boardTitle) {
      await new BoardController(request).deleteBoardByTitle(boardTitle);
    }
  });

  loggedUserFixture("@TC-2 Verify the ability to create a board", async ({ page, homePage }) => {
    await homePage.header.clickOnCreate();
    await homePage.header.chooseCreateBoardOptionFromCreateDropdown();

    boardTitle = DataGenerator.getPhrase();
    await homePage.header.createMenu.fillBoardTitle(boardTitle);
    await homePage.header.createMenu.clickOnCreateBoardButton();
    
    const boardPage = new BoardPage(page);
    await boardPage.verifyBoardTitle(boardTitle);
  });
});

loggedUserWithBoardFixture("@TC-5, Verify the ability to delete a board throught the Workspace navigation panel", async ({ board, boardPage }) => {
  await boardPage.navigate(board.url);
  await boardPage.boardHeader.openBoardMenu();
  await boardPage.boardHeader.boardMenu.closeCurrentBoard();
  await boardPage.boardHeader.boardMenu.popup.clickConfirmButton();
  
  await boardPage.closeBoardPanel.expectLoaded();
});
