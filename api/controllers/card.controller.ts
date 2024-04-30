import { APIRoutes } from "../../utils/constants/routes";
import { CreateCard } from "../builders/entities/cardBuilder";
import { CreateCardResponse } from "../types/CreateCardResponse";
import { BaseController } from "./base.controller";

export class CardController<T> extends BaseController<T> {
  async createCard(data: CreateCard): Promise<CreateCardResponse> {
    return await this.request()
      .setUrl(`${process.env.API_BASE_URL}${APIRoutes.Cards}`)
      .setMethod("POST")
      .setData(data)
      .send() as Promise<CreateCardResponse>;
  }
}
