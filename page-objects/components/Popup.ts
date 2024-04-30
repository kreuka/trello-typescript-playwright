import { expect } from "@playwright/test";
import { Component } from "../Component";

export default class Popup extends Component {
  private popup = this.page.locator(".pop-over");
  private confirmButton = this.page.locator(".js-confirm");
  private confirmBoardClosureButton = this.page.getByTestId("popover-close-board-confirm");
  private closeBoardButton = this.page.getByTestId("ForwardIcon");
  
  async clickConfirmButton(): Promise<void> {
    await this.confirmButton.click();
  }

  async confirmBoardClosure(): Promise<void> {
    await this.confirmBoardClosureButton.click();
  }

  async clickOnCloseBoardButton(): Promise<void> {
    await this.closeBoardButton.click();
  }

  async expectLoaded(): Promise<void> {
    await expect(this.popup).toBeVisible();
  }
}
