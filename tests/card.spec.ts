import { loggedUserWithCardFixture } from "../fixtures/loggedUserWithCardFixture";
import { loggedUserWithColumnFixture } from "../fixtures/loggedUserWithColumnFixture";

loggedUserWithCardFixture("@TC-4, Verify the ability to delete a card",  async ({ board, boardPage, card }) => {
  await boardPage.navigate(board.url);
  await boardPage.column.card.clickOnCardByName(card.name);
  await boardPage.column.card.cardEditor.sidebar.archieveOpenedCard();

  await boardPage.column.card.cardEditor.verifyOpenedCardIsArchieved();

  await boardPage.column.card.cardEditor.sidebar.deleteOpenedCard();
  await boardPage.column.card.cardEditor.sidebar.popup.clickConfirmButton();

  await boardPage.column.card.cardEditor.expectClosed();
  await boardPage.column.card.expectCardByNameIsNotVisible(card.name);
});

loggedUserWithColumnFixture("@TC-6, Verify the ability to create a card only with name",  async ({ board, boardPage, column }) => {
  await boardPage.navigate(board.url);
  const cardName = "@TC-6";
  await boardPage.column.addNewCardInColumnByName(column.name, cardName);
  await boardPage.column.card.expectCardByNameIsVisible(cardName);
});
