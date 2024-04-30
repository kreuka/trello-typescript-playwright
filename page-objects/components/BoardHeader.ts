import { expect } from "@playwright/test";
import { Component } from "../Component";
import BoardMenu from "./BoardMenu";

export default class BoardHeader extends Component {
  boardMenu = new BoardMenu(this.page);
  
  private boardHeader = this.page.locator(".board-header");
  private menuButton = this.boardHeader.locator("[data-testid='OverflowMenuHorizontalIcon']");

  async openBoardMenu(): Promise<void> {
    await this.menuButton.click();
  }

  async expectLoaded(): Promise<void> {
    await expect(this.boardHeader).toBeVisible();
  }
}
