/* eslint-disable @typescript-eslint/no-namespace */
declare global {
  namespace Express {
    interface Request {
      token?: string;
    }
    interface User {
      id?: string;
      email?: string;
    }
  }
}

export {};
