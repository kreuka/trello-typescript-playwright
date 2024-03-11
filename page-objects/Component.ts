import PageHolder from "./PageHolder";

export abstract class Component extends PageHolder {
  abstract expectLoaded(): Promise<void>;

  async isLoaded(): Promise<boolean> {
    try {
      await this.expectLoaded();
      return true;
    } catch {
      return false;
    }
  }
}
