import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';

test.describe('Authentication', () => {
  test('should login successfully with valid credentials', async ({
    page,
  }) => {
    const loginPage = new LoginPage(page);

    await loginPage.navigate();

    await loginPage.login(
      'fulano@qa.com',
      'teste'
    );

    await expect(page).toHaveURL(/admin\/home/);
  });

  test('should display error message for invalid credentials', async ({
    page,
  }) => {
    const loginPage = new LoginPage(page);

    await loginPage.navigate();

    await loginPage.login(
      'invalid@email.com',
      'wrongPassword'
    );

    await expect(loginPage.errorAlert).toBeVisible();

    await expect(loginPage.errorAlert).toContainText('Email e/ou senha inválidos');
  });

  test('should validate required fields', async ({
    page,
  }) => {
    const loginPage = new LoginPage(page);

    await loginPage.navigate();

    await loginPage.submitLogin();

    await expect(
    loginPage.emailRequiredMessage
    ).toBeVisible();

    await expect(
    loginPage.passwordRequiredMessage
    ).toBeVisible();
  });
});