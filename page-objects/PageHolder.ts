import { Page } from "@playwright/test";

export default abstract class PageHolder {
  constructor(protected page: Page) {}
}
