import { Page } from "playwright/types/test";

export abstract class BasePage {
  page: Page;
  constructor(page: Page) {
    this.page = page;
  }


  abstract navigate(): Promise<void>;
}