import { APIRequestContext } from '@playwright/test';
import { URLS } from '../config/urls';


export class AuthApi {
  constructor(
    private request: APIRequestContext
  ) {}

  async login(
    email: string,
    password: string
  ) {
  return await this.request.post(
  URLS.login,
      {
        data: {
          email,
          password,
        },
      }
    );
  }
}