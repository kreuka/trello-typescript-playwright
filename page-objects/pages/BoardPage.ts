import { expect } from "@playwright/test";
import { Navigatable } from "../interfaces/Navigatable";
import BasePage from "../BasePage";
import Column from "../components/Column";
import Header from "../components/Header";

export default class BoardPage extends BasePage implements Navigatable {
  pagePath = "/b";

  column = new Column(this.page);  
  header = new Header(this.page);

  private boardTitle = this.page.getByTestId("board-name-display");

  async expectLoaded(): Promise<void> {
    expect(this.boardTitle).toBeVisible();
  }

  async verifyBoardTitle(boardTitle: string): Promise<void> {
    await expect(this.boardTitle).toHaveText(boardTitle);
  }
}
