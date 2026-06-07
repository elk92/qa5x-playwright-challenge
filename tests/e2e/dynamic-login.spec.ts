import { test, expect } from '@playwright/test';

import { UsersApi } from '../../api/UsersApi';
import { UserFactory } from '../../utils/UserFactory';
import { LoginPage } from '../../pages/LoginPage';
import { HomePage } from '../../pages/HomePage';

test.describe('Dynamic Authentication', () => {
  test('should authenticate through ui using api generated user',
    async ({ page, request }) => {
    const usersApi = new UsersApi(request);

    const user = UserFactory.create();

    const createUserResponse =
    await usersApi.createUser(user);

     expect(createUserResponse.status())
     .toBe(201);

    const responseBody =
    await createUserResponse.json();

    expect(responseBody.message)
      .toBe('Cadastro realizado com sucesso');

    const loginPage =
     new LoginPage(page);

    await loginPage.navigate();

    await loginPage.login(
        user.email,
        user.password
      );

    await expect(
        loginPage.errorAlert
      ).not.toBeVisible();

    await expect(page)
        .toHaveURL(/admin\/home/);

    await expect(
     page.getByRole('heading', {
    name: `Bem Vindo ${user.nome}`
    })
    ).toBeVisible(); 
    const homePage =
     new HomePage(page);

    await expect(
     homePage.welcomeMessage(user.nome) 
    ).toBeVisible();

    await expect(
     homePage.logoutButton
    ).toBeVisible();
    }
  );
});