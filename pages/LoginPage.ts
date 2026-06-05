import { Page, Locator } from '@playwright/test';

export class LoginPage {
  readonly page: Page;

  readonly emailInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;
  readonly errorMessage: Locator;

  constructor(page: Page) {
    this.page = page;

    this.emailInput = page.getByTestId('email');
    this.passwordInput = page.getByTestId('senha');
    this.loginButton = page.getByTestId('entrar');
    this.errorMessage = page.getByTestId('error');
  }

  async navigate() {
    await this.page.goto('/login');
  }

  async fillEmail(email: string) {
    await this.emailInput.fill(email);
  }

  async fillPassword(senha: string) {
    await this.passwordInput.fill(senha);
  }

  async submitLogin() {
    await this.loginButton.click();
  }

  async login(email: string, senha: string) {
    await this.fillEmail(email);
    await this.fillPassword(senha);
    await this.submitLogin();
  }
}