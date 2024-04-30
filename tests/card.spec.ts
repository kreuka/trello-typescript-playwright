import { loggedUserWithCardFixture } from "../fixtures/loggedUserWithCardFixture";

loggedUserWithCardFixture("@TC-4, Verify the ability to delete a card",  async ({ board, boardPage, card }) => {
  await boardPage.navigate(board.url);
  await boardPage.column.card.clickOnCardByName(card.name);
  await boardPage.column.card.cardEditor.sidebar.archieveOpenedCard();

  await boardPage.column.card.cardEditor.verifyOpenedCardIsArchieved();

  await boardPage.column.card.cardEditor.sidebar.deleteOpenedCard();
  await boardPage.column.card.cardEditor.sidebar.popup.confirmCardDeletion();

  await boardPage.column.card.cardEditor.expectClosed();
  await boardPage.column.card.expectCardByNameIsNotVisible(card.name);
});
