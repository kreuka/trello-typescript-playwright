export interface CreateColumn {
  name: string,
  pos?: string,
}

interface ColumnBuilderInterface {
  setName(name: string): ColumnBuilderInterface,
  setPosition(position: string): ColumnBuilderInterface,
  build(): CreateColumn,
}

export class ColumnBuilder implements ColumnBuilderInterface {
  private name = "";
  private pos?: string;

  setName(name: string): ColumnBuilderInterface {
    this.name = name;
    return this;
  }

  setPosition(position: string): ColumnBuilderInterface {
    this.pos = position;
    return this;
  }

  build(): CreateColumn {
    if (!this.name) throw new Error("Name is missing");

    return {
      name: this.name,
      pos: this.pos,
    };
  }
}
