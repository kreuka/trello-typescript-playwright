import { expect } from "@playwright/test";
import BasePage from "../BasePage";

export default class LoginPage extends BasePage {
  pagePath = "https://trello.com/login";
  private loginForm = this.page.getByRole("main");
  private emailInput = this.page.getByPlaceholder("Enter email");
  private passwordInput = this.page.getByPlaceholder("Enter password");
  private logInButton = this.page.getByRole("button", { name: "Log in" });
  private continueButton = this.page.getByRole("button", { name: "Continue" });

  async navigate(): Promise<void> {
    await this.page.goto(this.pagePath);
  }

  async expectLoaded(): Promise<void> {
    expect(this.loginForm).toBeVisible();
  }

  async fillEmail(emailValue: string): Promise<void> {
    await this.emailInput.fill(emailValue);
  }

  async fillPassword(emailValue: string): Promise<void> {
    await this.passwordInput.fill(emailValue);
  }

  async clickContinueButton(): Promise<void> {
    await this.continueButton.click();
  }

  async clickLogInButton(): Promise<void> {
    await this.logInButton.click();
  }
}
