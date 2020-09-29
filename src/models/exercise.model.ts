import BaseModel from './base.model';

class Exercise extends BaseModel {
  private name: string;

  private member: string;

  constructor({ name, member }: Exercise) {
    super();
    this.name = name;
    this.member = member;
  }
}

export default Exercise;
