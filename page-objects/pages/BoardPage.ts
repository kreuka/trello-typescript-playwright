import { expect } from "@playwright/test";
import DynamicBasePage from "../DynamicBasePage";

export default class BoardPage extends DynamicBasePage {
  private boardTitle = this.page.getByTestId("board-name-display");

  async expectLoaded(): Promise<void> {
    expect(this.boardTitle).toBeVisible();
  }

  async verifyBoardTitle(boardTitle: string): Promise<void> {
    await expect(this.boardTitle).toHaveText(boardTitle);
  }
}
