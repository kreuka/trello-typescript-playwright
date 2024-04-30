import { expect } from "@playwright/test";
import { Component } from "../Component";

export default class Popup extends Component {
  private popup = this.page.locator(".pop-over");
  private confirmCardDeletionButton = this.page.locator(".js-confirm");
  
  async confirmCardDeletion(): Promise<void> {
    await this.confirmCardDeletionButton.click();
  }

  async expectLoaded(): Promise<void> {
    expect(this.popup).toBeVisible();
  }
}
