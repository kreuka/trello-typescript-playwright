import { Component } from "./Component";

export default abstract class BasePage extends Component {
  abstract pagePath: string;
  
  async navigate(): Promise<void> {
    await this.page.goto(this.pagePath);
    await this.expectLoaded();
  }
}
