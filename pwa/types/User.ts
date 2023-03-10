import { Item } from "./item";

export class User implements Item {
  public "@id"?: string;

  constructor(
    _id?: string,
    public email?: string,
    public roles?: any,
    public password?: string
  ) {
    this["@id"] = _id;
  }
}
