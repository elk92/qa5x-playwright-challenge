import { APIRequestContext } from '@playwright/test';

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
      'https://serverest.dev/usuarios',
      {
        data: userData,
      }
    );
  }

  async getUsers() {
    return await this.request.get(
      'https://serverest.dev/usuarios'
    );
  }
}