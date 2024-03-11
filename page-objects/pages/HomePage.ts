import { expect } from "@playwright/test";
import BasePage from "../BasePage";

export default class HomePage extends BasePage {
  pagePath = "https://trello.com/u/boards";
  private userBoards = this.page.getByText("YOUR WORKSPACES");

  async navigate() {
    await this.page.goto(this.pagePath); 
  }

  async expectLoaded(): Promise<void> {
    expect(this.userBoards).toBeVisible();
  }
}
