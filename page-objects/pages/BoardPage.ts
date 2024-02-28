import { expect } from "@playwright/test";
import BasePage from "./BasePage";

export default class BoardPage extends BasePage {
  private boardTitle = this.page.getByTestId("board-name-display");

  async verifyBoardTitle(boardTitle: string): Promise<void> {
    await expect(this.boardTitle).toHaveText(boardTitle);
  }

  async navigate(): Promise<void> {
    throw new Error("Board page doesn't have a navigate method");  
  }
}
