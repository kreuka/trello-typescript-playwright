import { Locator, Page } from "@playwright/test";
import BasePage from "./BasePage";

export default class LoginPage extends BasePage {
  private url = "https://trello.com/login";
  private emailInput: Locator;
  private passwordInput: Locator;
  private logInButton: Locator;
  private continueButton: Locator;

  constructor(page: Page) {
    super(page);
    this.emailInput = page.getByPlaceholder("Enter email");
    this.passwordInput = page.getByPlaceholder("Enter password");
    this.logInButton = page.getByRole("button", { name: "Log in" });
    this.continueButton = page.getByRole("button", { name: "Continue" });
  }

  async navigate(): Promise<void> {
    await this.page.goto(this.url);
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
