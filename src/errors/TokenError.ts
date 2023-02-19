import { PlunkError } from "./PlunkError";

export class TokenError extends PlunkError {
  constructor(msg = "Invalid API Credentials Provided") {
    super(msg);

    Object.setPrototypeOf(this, TokenError.prototype);
  }
}
