import BasePage from "./BasePage";

export default class HomePage extends BasePage {
  private url = "https://trello.com/u/boards";

  async navigate() {
    await this.page.goto(this.url); 
  }
}
