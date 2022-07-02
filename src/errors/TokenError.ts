import { PlunkError } from "./PlunkError";

export class TokenError extends PlunkError {
  constructor() {
    super("Invalid API secret provided");

    Object.setPrototypeOf(this, TokenError.prototype);
  }
}
