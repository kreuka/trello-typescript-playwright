import { expect } from "@playwright/test";
import { Component } from "./Component";
import { Navigatable } from "./interfaces/Navigatable";

export default abstract class BasePage extends Component implements Navigatable {
  abstract pagePath: string;
  
  async navigate(url?: string): Promise<void> {
    await this.page.goto(url ?? this.pagePath);
    await this.expectLoaded();
  }

  async verifyPageUrl(expectedUrl: string): Promise<void> {
    await expect(this.page).toHaveURL(expectedUrl);
  }

  async verifyPageTitle(expectedTitleOrRegExp: string|RegExp): Promise<void> {
    await expect(this.page).toHaveTitle(expectedTitleOrRegExp);
  }
}
