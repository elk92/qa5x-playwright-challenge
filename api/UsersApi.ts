import { URLS } from '../config/urls';
import { BaseApi } from './BaseApi';

export class UsersApi extends BaseApi {
  async createUser(userData: {
    nome: string;
    email: string;
    password: string;
    administrador: string;
  }) {
    return await this.request.post(
      URLS.users,
      {
        data: userData,
      }
    );
  }

  async getUsers() {
    return await this.request.get(
      URLS.users
    );
  }
}