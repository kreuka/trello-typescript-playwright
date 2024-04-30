export interface CreateCard {
  name?: string,
  desc?: string,
  pos?: string | number,
  due?: string,
  start?: string,
  idList: string,
}

interface CardBuilderInterface {
  setName(name: string): CardBuilderInterface,
  setDescription(description: string): CardBuilderInterface,
  setPosition(position: string | number): CardBuilderInterface,
  setDueDate(due: string): CardBuilderInterface,
  setStartDate(start: string): CardBuilderInterface,
  setIdList(id: string): CardBuilderInterface,
  build(): CreateCard,
}

export class CardBuilder implements CardBuilderInterface {
  name? = "";
  desc? = "";
  pos? = "";
  due? = "";
  start? = "";
  idList = "";

  setName(name: string): CardBuilderInterface {
    this.name = name;
    return this;
  }

  setDescription(description: string): CardBuilderInterface {
    this.desc = description;
    return this;
  }

  setPosition(position: string): CardBuilderInterface {
    this.pos = position;
    return this;
  }

  setDueDate(dueDate: string): CardBuilderInterface {
    this.due = dueDate;
    return this;
  }

  setStartDate(startDate: string): CardBuilderInterface {
    this.start = startDate;
    return this;
  }

  setIdList(id: string): CardBuilderInterface {
    this.idList = id;
    return this;
  }

  build(): CreateCard {
    if (!this.idList) throw new Error("idList is missing");

    return {
      name: this.name,
      desc: this.desc,
      pos: this.pos,
      due: this.due,
      start: this.start,
      idList: this.idList,
    };
  }
}
