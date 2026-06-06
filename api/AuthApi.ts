import { APIRequestContext } from '@playwright/test';

export class AuthApi {
  constructor(
    private request: APIRequestContext
  ) {}

  async login(
    email: string,
    password: string
  ) {
    return await this.request.post(
      'https://serverest.dev/login',
      {
        data: {
          email,
          password,
        },
      }
    );
  }
}