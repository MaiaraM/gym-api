import BaseModel from './base.model';

class Exercise extends BaseModel {
  name: string;

  member: string;

  constructor(name: string, member: string) {
    super();
    this.name = name;
    this.member = member;
  }
}

export default Exercise;
