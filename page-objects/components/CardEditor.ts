import { expect } from "@playwright/test";
import { Component } from "../Component";
import Sidebar from "./Sidebar";

export default class CardEditor extends Component {
  sidebar = new Sidebar(this.page);

  private cardEditor = this.page.locator(".card-detail-window");
  private archieveBanner = this.cardEditor.getByTestId("card-back-archive-banner");
  
  async expectLoaded(): Promise<void> {
    await expect(this.cardEditor).toBeVisible();
  }

  async expectClosed(): Promise<void> {
    await expect(this.cardEditor).not.toBeVisible();
  }

  async verifyOpenedCardIsArchieved(): Promise<void> {
    await expect(this.archieveBanner).toBeVisible();
  }
}
