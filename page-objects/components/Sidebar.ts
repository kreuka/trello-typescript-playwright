import { expect } from "@playwright/test";
import { Component } from "../Component";
import Popup from "./Popup";

export default class Sidebar extends Component {
  popup = new Popup(this.page);
  
  private sidebar = this.page.locator(".window-sidebar");
  private archieveButton = this.page.locator(".js-archive-card");
  private deleteButton = this.page.locator(".js-delete-card");

  async archieveOpenedCard(): Promise<void> {
    await this.archieveButton.click();
  }

  async deleteOpenedCard(): Promise<void> {
    await this.deleteButton.click();
  }

  async expectLoaded(): Promise<void> {
    expect(this.sidebar).toBeVisible();
  }
}
