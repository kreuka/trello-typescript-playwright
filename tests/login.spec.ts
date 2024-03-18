import { expect } from "@playwright/test";
import { loggedUserFixture } from "../fixtures/loggedUserFixture";

loggedUserFixture("@TC-1, Verify the ability to log in with a valid user", async ({ page }) => {
  await expect(page).toHaveTitle("Trello");
  await expect(page).toHaveURL("https://trello.com/u/kyryloreuka2/boards");
});
