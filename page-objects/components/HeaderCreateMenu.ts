import { expect } from "@playwright/test";
import { Component } from "../Component";

export default class HeaderCreateMenu extends Component {
  private boardTitleInput = this.page.getByTestId("create-board-title-input");
  private createBoardButton = this.page.getByTestId("create-board-submit-button");

  async expectLoaded(): Promise<void> {
    expect(this.boardTitleInput).toBeVisible();
  }

  async fillBoardTitle(boardTitle: string): Promise<void> {
    await this.expectLoaded();
    await this.boardTitleInput.fill(boardTitle);
  }

  async clickOnCreateBoardButton(): Promise<void> {
    await this.expectLoaded();
    await this.createBoardButton.click();
  }
}
