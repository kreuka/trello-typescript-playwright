import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";

test("Verify the ability to log in with a valid user", async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.navigate();
  await loginPage.fillEmail(process.env.EMAIL!);
  await loginPage.clickContinueButton();
  await loginPage.fillPassword(process.env.PASSWORD!);
  await loginPage.clickLogInButton();
  await expect(page).toHaveTitle("Boards | Trello");
  await expect(page).toHaveURL("https://trello.com/u/kyryloreuka2/boards");
});
