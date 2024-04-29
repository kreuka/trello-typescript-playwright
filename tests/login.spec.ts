import { loggedUserFixture } from "../fixtures/loggedUserFixture";

loggedUserFixture("@TC-1, Verify the ability to log in with a valid user", async ({ homePage }) => {
  await homePage.verifyPageUrl("https://trello.com/u/kyryloreuka2/boards");
  await homePage.verifyPageTitle(/.*Boards/);
});
