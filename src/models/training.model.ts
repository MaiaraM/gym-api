import BaseModel from './base.model';

class Training extends BaseModel {
  private name: string;

  private member: string;

  constructor({ name, member }: Training) {
    super();
    this.name = name;
    this.member = member;
  }
}

export default Training;
