import { test as base } from "@playwright/test";
import LoginPage from "../page-objects/pages/LoginPage";

export const loggedUserFixture = base.extend<{ loginPage: LoginPage }>({
  loginPage: [async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await loginPage.navigate();
    await loginPage.fillEmail(process.env.EMAIL!);
    await loginPage.clickContinueButton();
    await loginPage.fillPassword(process.env.PASSWORD!);
    await loginPage.clickLogInButton();
    await use(loginPage);
  },
  { auto: true }]
});
