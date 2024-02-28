import { test } from "@playwright/test";
import LoginPage from "../page-objects/pages/LoginPage";
import Header from "../page-objects/components/Header";
import HeaderCreateMenu from "../page-objects/components/HeaderCreateMenu";
import BoardPage from "../page-objects/pages/BoardPage";

test("Verify the ability to create a board", async ({ page }) => {
  // log in
  const loginPage = new LoginPage(page);
  await loginPage.navigate();
  await loginPage.fillEmail(process.env.EMAIL!);
  await loginPage.clickContinueButton();
  await loginPage.fillPassword(process.env.PASSWORD!);
  await loginPage.clickLogInButton();
  
  // test
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
