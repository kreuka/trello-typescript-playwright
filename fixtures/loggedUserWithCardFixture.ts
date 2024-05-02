import { loggedUserWithColumnFixture } from "./loggedUserWithColumnFixture";
import { CreateCardResponse } from "../api/types/CreateCardResponse";
import { CardBuilder } from "../api/builders/entities/cardBuilder";
import { CardController } from "../api/controllers/card.controller";
import DataGenerator from "../helpers/DataGenerator";

export const loggedUserWithCardFixture = loggedUserWithColumnFixture.extend<{ card: CreateCardResponse }>({
  card: async ({ request, column }, use) => {
    const cardBody = new CardBuilder()
      .setName(DataGenerator.getPhrase())
      .setDescription(DataGenerator.getPhrase())
      .setIdList(column.id)
      .build();

    const createCardResponse = await new CardController(request).createCard(cardBody);

    await use(createCardResponse);
  },
});
