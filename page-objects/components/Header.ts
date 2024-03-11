import { expect } from "@playwright/test";
import { Component } from "../Component";

export default class Header extends Component {
  private createButton = this.page.getByTestId("header-create-menu-button");
  private createDropdownCreateBoardOption = this.page.getByTestId("header-create-board-button");

  async expectLoaded(): Promise<void> {
    expect(this.createButton).toBeVisible();
  }

  async clickOnCreate(): Promise<void> {
    await this.createButton.click();
  }

  async chooseCreateBoardOptionFromCreateDropdown(): Promise<void> {
    const optionElement = this.createDropdownCreateBoardOption;
    await optionElement.click();
  }
}
