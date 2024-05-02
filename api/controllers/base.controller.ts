import { APIRequestContext } from "@playwright/test";
import { BasicAPIRequestBuilder } from "../builders/request/apiRequestBuilder";

export class BaseController {
  constructor(protected apiRequestContext: APIRequestContext) {}
  protected request() {
    return new BasicAPIRequestBuilder(this.apiRequestContext)
      .setParams({
        "key": process.env.TRELLO_API_KEY!,
        "token": process.env.TRELLO_API_TOKEN!,
      });
  }
}
