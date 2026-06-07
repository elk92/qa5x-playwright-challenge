import { URLS } from '../config/urls';
import { BaseApi } from './BaseApi';

export class AuthApi extends BaseApi {
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