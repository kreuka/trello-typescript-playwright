import { argosScreenshot } from "@argos-ci/playwright";
import { loggedUserFixture } from "../fixtures/loggedUserFixture";

loggedUserFixture("logged user homepage", async ({ page }) => {
  await argosScreenshot(page, "logged user homepage");
});
