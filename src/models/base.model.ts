import { uuid } from "uuidv4";

class BaseModel {
  id: string;
  createAt: Date;
  deletedAt?: Date;


  constructor() {
    this.id = uuid();
    this.createAt = new Date();
  }
}

export default BaseModel;
