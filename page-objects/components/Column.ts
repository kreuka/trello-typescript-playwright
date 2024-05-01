import { expect } from "@playwright/test";
import { Component } from "../Component";
import Card from "./Card";

export default class Column extends Component {
  card = new Card(this.page);
  
  private column = this.page.getByTestId("list");
  private columnTitle = this.page.getByTestId("list-name");
  private addColumnButton = this.page.locator("[data-testid='list-composer-button'] [data-testid='AddIcon']");
  private emptyListTitle = this.page.getByPlaceholder("Enter list title…");
  private addListButton = this.page.getByText("Add list");
  private closeIcon = this.page.getByTestId("list-composer-cancel-button");
  private addCardButtonInSpecificColumn = (columnName: string) => this.page.locator(`//div[@data-testid='list'][.//h2[@data-testid='list-name' and contains(text(), '${columnName}')]]//button[@data-testid='list-add-card-button']`);
  private confirmCardAddition = this.page.getByTestId("list-card-composer-add-card-button");
  private openedCardNameInput = this.page.getByTestId("list-card-composer-textarea");
  
  async expectLoaded(): Promise<void> {
    await expect(this.column).toBeVisible();
  }

  async clickOnAddColumnButton() {
    await this.addColumnButton.click();
  }

  async fillColumnTitle(columnTitle: string): Promise<void> {
    await this.emptyListTitle.fill(columnTitle);
  }

  async addNewCardInColumnByName(columnName: string, cardName: string): Promise<void> {
    await this.addCardButtonInSpecificColumn(columnName).click();
    await this.openedCardNameInput.fill(cardName);
    await this.confirmCardAddition.click();
  }

  async clickOnAddListButton(): Promise<void> {
    await this.addListButton.click();
  }

  async addNewColumn(columnTitle: string): Promise<void> {
    await this.addColumnButton.click();
    await this.fillColumnTitle(columnTitle);
    await this.clickOnAddListButton();
  }

  async clickOnCloseIcon(){
    await this.closeIcon.click();
  }

  async verifyColumnCount(expectedCount: number): Promise<void> {
    await expect(this.column).toHaveCount(expectedCount);
  }

  async verifyColumnTitle(columnTitle: string): Promise<void> {
    await expect(this.columnTitle).toHaveText(columnTitle);
  }
}
