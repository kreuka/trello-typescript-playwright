import { expect } from "@playwright/test";
import { Navigatable } from "../interfaces/Navigatable";
import BasePage from "../BasePage";

export default class BoardPage extends BasePage implements Navigatable {
  pagePath = "/b";
  private boardTitle = this.page.getByTestId("board-name-display");

  async expectLoaded(): Promise<void> {
    expect(this.boardTitle).toBeVisible();
  }

  async verifyBoardTitle(boardTitle: string): Promise<void> {
    await expect(this.boardTitle).toHaveText(boardTitle);
  }
}
