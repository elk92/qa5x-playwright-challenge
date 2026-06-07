import { Page, Locator } from '@playwright/test';

export class HomePage {
  readonly page: Page;

  readonly logoutButton: Locator;

  constructor(page: Page) {
    this.page = page;

    this.logoutButton =
      page.getByRole('button', {
        name: 'Logout'
      });
  }

  welcomeMessage(userName: string) {
    return this.page.getByRole(
      'heading',
      {
        name: `Bem Vindo ${userName}`
      }
    );
  }
}