import { expect } from "@playwright/test";
import { Component } from "../Component";

export default class Column extends Component {
  private column = this.page.getByTestId("list");
  private columnTitle = this.page.getByTestId("list-name");
  private addColumnButton = this.page.locator("[data-testid='list-composer-button'] [data-testid='AddIcon']");
  private emptyListTitle = this.page.getByPlaceholder("Enter list title…");
  private addListButton = this.page.getByText("Add list");
  private closeIcon = this.page.getByTestId("list-composer-cancel-button");
  
  async expectLoaded(): Promise<void> {
    expect(this.column).toBeVisible();
  }

  async clickOnAddColumnButton() {
    await this.addColumnButton.click();
  }

  async fillColumnTitle(columnTitle: string): Promise<void> {
    await this.emptyListTitle.fill(columnTitle);
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
