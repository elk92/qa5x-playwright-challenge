import { APIRequestContext } from '@playwright/test';
import { URLS } from '../config/urls';


export class UsersApi {
  constructor(
    private request: APIRequestContext
  ) {}

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