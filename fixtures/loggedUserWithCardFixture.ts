import { loggedUserWithColumnFixture } from "./loggedUserWithColumnFixture";
import { randomUUID } from "crypto";
import { CreateCardResponse } from "../api/types/CreateCardResponse";
import { CardBuilder } from "../api/builders/entities/cardBuilder";
import { CardController } from "../api/controllers/card.controller";

export const loggedUserWithCardFixture = loggedUserWithColumnFixture.extend<{ card: CreateCardResponse }>({
  card: async ({ request, column }, use) => {
    const cardBody = new CardBuilder()
      .setName(`${randomUUID()}_card`)
      .setDescription(`${randomUUID()}_description`)
      .setIdList(column.id)
      .build();

    const createCardResponse = await new CardController(request).createCard(cardBody);

    await use(createCardResponse);
  },
});
