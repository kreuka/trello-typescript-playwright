import { expect } from "@playwright/test";
import { Component } from "../Component";
import Popup from "./Popup";

export default class BoardMenu extends Component {
  popup = new Popup(this.page);
  
  private boardMenu = this.page.locator(".board-menu");
  private closeBoardButton = this.boardMenu.locator(".js-close-board");

  async closeCurrentBoard(): Promise<void> {
    await this.closeBoardButton.click();
  }

  async expectLoaded(): Promise<void> {
    await expect(this.boardMenu).toBeVisible();
  }
}
