export class TokenError extends Error {
  constructor() {
    super('Error with authentication token');
  }
}
