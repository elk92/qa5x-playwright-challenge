import { test, expect } from '@playwright/test';

import { UsersApi } from '../../api/UsersApi';
import { UserFactory } from '../../utils/UserFactory';

test.describe('Users API', () => {
  test('should create a user successfully', async ({
    request,
  }) => {
    const usersApi = new UsersApi(request);

    const user = UserFactory.create();

    const response = await usersApi.createUser(
      user
    );

    expect(response.status()).toBe(201);

    const body = await response.json();

    expect(body.message)
      .toBe('Cadastro realizado com sucesso');
  });
});