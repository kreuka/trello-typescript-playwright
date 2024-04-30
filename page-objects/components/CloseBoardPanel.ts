import { expect } from "@playwright/test";
import { Component } from "../Component";

export default class CloseBoardPanel extends Component {
  private closeBoardMessage = this.page.getByTestId("close-board-big-message");

  async expectLoaded(): Promise<void> {
    await expect(this.closeBoardMessage).toBeVisible();
  }
}
