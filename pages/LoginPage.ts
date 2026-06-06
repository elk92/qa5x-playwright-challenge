import { Page, Locator } from '@playwright/test';

export class LoginPage {
  readonly page: Page;
  readonly emailInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;
  readonly errorAlert: Locator;
  readonly emailRequiredMessage: Locator;
  readonly passwordRequiredMessage: Locator;

  constructor(page: Page) {
    this.page = page;

    this.emailInput = page.getByTestId('email');
    this.passwordInput = page.getByTestId('senha');
    this.loginButton = page.getByTestId('entrar');

    this.errorAlert = page.locator(
      '.alert.alert-secondary.alert-dismissible'
    );
    this.emailRequiredMessage = page.getByText('Email é obrigatório');
    this.passwordRequiredMessage = page.getByText('Password é obrigatório');
  }

  async navigate() {
    await this.page.goto('/login');
  }

    async isErrorVisible() {
  return await this.errorAlert.isVisible();
}

    async getErrorMessage() {
  return await this.errorAlert.textContent();
}

  async fillEmail(email: string) {
    await this.emailInput.fill(email);
  }

  async fillPassword(password: string) {
    await this.passwordInput.fill(password);
  }

  async submitLogin() {
    await this.loginButton.click();
  }

  async login(email: string, password: string) {
    await this.fillEmail(email);
    await this.fillPassword(password);
    await this.submitLogin();
  }
}

