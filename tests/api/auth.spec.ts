import { test, expect } from '@playwright/test';

import { AuthApi } from '../../api/AuthApi'
import { users } from '../../fixtures/users';

test.describe('Authentication API', () => {
  test('should authenticate successfully', async ({
    request,
  }) => {
    const authApi = new AuthApi(request);

    const response = await authApi.login(
      users.validUser.email,
      users.validUser.password
    );

    expect(response.status()).toBe(200);

    const body = await response.json();

    expect(body.message)
      .toBe('Login realizado com sucesso');
  });

  test('should return bearer token after login', async ({
    request,
  }) => {
    const authApi = new AuthApi(request);

    const response = await authApi.login(
      users.validUser.email,
      users.validUser.password
    );

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

    expect(response.status()).toBe(401);

    const body = await response.json();

    expect(body.message)
      .toBe('Email e/ou senha inválidos');
  });
});