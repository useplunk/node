import { PlunkError } from "./PlunkError";

export class NotFoundError extends PlunkError {
  constructor(msg = "That resource could not be found") {
    super(msg);

    Object.setPrototypeOf(this, NotFoundError.prototype);
  }
}
