import { expect } from "@playwright/test";
import BasePage from "../BasePage";

export default class HomePage extends BasePage {
  pagePath = "/u/boards";
  private userBoards = this.page.getByText("YOUR WORKSPACES");

  async expectLoaded(): Promise<void> {
    await this.page.waitForLoadState("networkidle");
    expect(this.userBoards).toBeVisible();
  }
}
