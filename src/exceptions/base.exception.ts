class BaseException extends Error {
  public name: string;
  public status: number;
  public message: string;

  constructor(status: number, message: string) {
    super();
    this.name = this.constructor.name;
    this.status = status;
    this.message = message;
  }
}

export default BaseException;
