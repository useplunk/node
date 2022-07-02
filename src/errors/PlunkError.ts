export class PlunkError extends Error {
  constructor(msg: string) {
    super(msg);

    Object.setPrototypeOf(this, PlunkError.prototype);
  }
}
