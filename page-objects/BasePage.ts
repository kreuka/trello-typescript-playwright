import { Component } from "./Component";
import { Navigatable } from "./interfaces/Navigatable";

export default abstract class BasePage extends Component implements Navigatable {
  abstract pagePath: string;
  
  async navigate(url?: string): Promise<void> {
    await this.page.goto(url ?? this.pagePath);
    await this.expectLoaded();
  }
}
