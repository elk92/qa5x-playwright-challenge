import { test, expect } from '@playwright/test';

import { AuthApi } from '../../api/AuthApi';
import { UsersApi } from '../../api/UsersApi';
import { UserFactory } from '../../utils/UserFactory';
import { users } from '../../fixtures/users';

test.describe('Authentication API', () => {
  test('should return bearer token after login', async ({
    request,
  }) => {
    const usersApi = new UsersApi(request);
    const authApi = new AuthApi(request);

    const user = UserFactory.create();

    const createUserResponse =
      await usersApi.createUser(user);

    expect(createUserResponse.status())
      .toBe(201);

    const response = await authApi.login(
      user.email,
      user.password
    );

    expect(response.status())
      .toBe(200);

    const body = await response.json();

    expect(body.authorization)
      .toContain('Bearer');
  });

  test('should reject invalid credentials', async ({
    request,
  }) => {
    const authApi = new AuthApi(request);

    const response = await authApi.login(
      users.invalidUser.email,
      users.invalidUser.password
    );

    expect(response.status())
      .toBe(401);

    const body = await response.json();

    expect(body.message)
      .toBe('Email e/ou senha inválidos');
  });
});