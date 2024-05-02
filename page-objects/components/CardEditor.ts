import { expect } from "@playwright/test";
import { Component } from "../Component";
import Sidebar from "./Sidebar";

export default class CardEditor extends Component {
  sidebar = new Sidebar(this.page);

  private cardEditor = this.page.locator(".card-detail-window");
  private closeEditorButton = this.page.locator(".js-close-window");
  private archieveBanner = this.cardEditor.getByTestId("card-back-archive-banner");
  private cardTitle = this.cardEditor.locator(".js-card-detail-title-input");
  
  async fillCardTitle(title: string): Promise<void> {
    await this.expectLoaded();
    await this.cardTitle.fill(title);
  }

  async closeEditor(): Promise<void> {
    await this.closeEditorButton.click();
    await this.expectClosed();
  }

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
