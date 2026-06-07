export class UserFactory {
  static create() {
    const timestamp = Date.now();

    return {
      nome: `QA User test ${timestamp}`,
      email: `qa_usertest${timestamp}@test.com`,
      password: 'Teste@123',
      administrador: 'true',
    };
  }
}