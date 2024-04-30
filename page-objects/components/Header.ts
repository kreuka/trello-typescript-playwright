import { expect } from "@playwright/test";
import { Component } from "../Component";
import CreateMenu from "./CreateMenu";

export default class Header extends Component {
  createMenu = new CreateMenu(this.page);
  
  private createButton = this.page.getByTestId("header-create-menu-button");
  private createDropdownCreateBoardOption = this.page.getByTestId("header-create-board-button");

  async expectLoaded(): Promise<void> {
    await expect(this.createButton).toBeVisible();
  }

  async clickOnCreate(): Promise<void> {
    await this.createButton.click();
  }

  async chooseCreateBoardOptionFromCreateDropdown(): Promise<void> {
    const optionElement = this.createDropdownCreateBoardOption;
    await optionElement.click();
  }
}
