import { expect } from "@playwright/test";
import { Component } from "../Component";
import CardEditor from "./CardEditor";

export default class Card extends Component {
  cardEditor = new CardEditor(this.page);
  private anyCard = this.page.getByTestId("trello-card");
  private cardByName = (name: string) => this.page.getByRole("link", { name });
  
  async clickOnCardByName(name: string): Promise<void> {
    await this.cardByName(name).click();
  }

  async expectLoaded(): Promise<void> {
    await expect(this.anyCard).toBeVisible();
  }

  async expectCardByNameIsVisible(name: string): Promise<void> {
    await expect(this.cardByName(name)).toBeVisible();
  }

  async expectCardByNameIsNotVisible(name: string): Promise<void> {
    await expect(this.cardByName(name)).not.toBeVisible();
  }
}
