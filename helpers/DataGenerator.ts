import { faker } from "@faker-js/faker";

export default class DataGenerator {
  static getPhrase() {
    return faker.company.name();
  }
}
