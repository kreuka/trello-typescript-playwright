import { test } from "@playwright/test";
import LoginPage from "../page-objects/pages/LoginPage";
import Header from "../page-objects/components/Header";
import HeaderCreateMenu from "../page-objects/components/HeaderCreateMenu";
import Column from "../page-objects/components/Column";

test("Verify the ability to create a column",  async ({ page }) => {
  // log in
  const loginPage = new LoginPage(page);
  await loginPage.navigate();
  await loginPage.fillEmail(process.env.EMAIL!);
  await loginPage.clickContinueButton();
  await loginPage.fillPassword(process.env.PASSWORD!);
  await loginPage.clickLogInButton();
  
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
