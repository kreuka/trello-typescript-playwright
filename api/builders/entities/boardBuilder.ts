export interface CreateBoard {
  name: string,
  desc?: string,
  defaultLists?: boolean,
}

interface BoardBuilderInterface {
  setName(name: string): BoardBuilderInterface,
  setDescription(description: string): BoardBuilderInterface,
  setDefaultLists(isSetDefaultLists: boolean): BoardBuilderInterface,
  build(): CreateBoard,
}

export class BoardBuilder implements BoardBuilderInterface {
  private name = "";
  private description?: string;
  private isSetDefaultLists?: boolean;

  setName(name: string): BoardBuilderInterface {
    this.name = name;
    return this;
  }

  setDescription(description: string): BoardBuilderInterface {
    this.description = description;
    return this;
  }

  setDefaultLists(isSetDefaultLists: boolean): BoardBuilderInterface {
    this.isSetDefaultLists = isSetDefaultLists;
    return this;
  }

  build(): CreateBoard {
    if (!this.name) throw new Error("Name is missing");

    return {
      name: this.name,
      desc: this.description,
      defaultLists: this.isSetDefaultLists,
    };
  }
}
