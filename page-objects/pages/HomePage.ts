import { expect } from "@playwright/test";
import BasePage from "../BasePage";
import Header from "../components/Header";

export default class HomePage extends BasePage {
  pagePath = "/u/boards";

  header = new Header(this.page);

  private userBoards = this.page.getByText("YOUR WORKSPACES");

  async expectLoaded(): Promise<void> {
    await this.page.waitForLoadState("networkidle");
    expect(this.userBoards).toBeVisible();
  }
}
