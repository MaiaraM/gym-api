import BaseException from "./base.exception";

class DuplicationException extends BaseException {
  constructor(param: string) {
    super(409, `There is an object with this ${param}`);
  }
}

export default DuplicationException;
