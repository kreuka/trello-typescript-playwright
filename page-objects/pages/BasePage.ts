import { Page } from "playwright/types/test";

export default abstract class BasePage {
  protected page: Page;
  constructor(page: Page) {
    this.page = page;
  }

  abstract navigate(): Promise<void>;
}
