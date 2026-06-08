# QA5X Playwright Challenge

Test automation framework built with Playwright and TypeScript, focused on UI and API validation, maintainability, scalability and CI/CD integration.

## Overview

This project was created to demonstrate a modern test automation approach using Playwright, combining UI and API testing strategies under a single framework.

The solution follows common software quality engineering practices such as:

* Page Object Model (POM)
* API abstraction layer
* Dynamic test data generation
* Environment configuration management
* UI and API integration testing
* Continuous Integration with GitHub Actions

---

## Technology Stack

| Tool           | Purpose                           |
| -------------- | --------------------------------- |
| Playwright     | UI and API automation             |
| TypeScript     | Static typing and maintainability |
| GitHub Actions | Continuous Integration            |
| ESLint         | Code quality                      |
| Prettier       | Code formatting                   |

---

## Project Structure

```text
.
├── api/
│   ├── BaseApi.ts
│   ├── AuthApi.ts
│   └── UsersApi.ts
│
├── config/
│   ├── environment.ts
│   └── urls.ts
│
├── fixtures/
│   └── users.ts
│
├── pages/
│   ├── LoginPage.ts
│   └── HomePage.ts
│
├── tests/
│   ├── api/
│   │   ├── auth.spec.ts
│   │   └── users.spec.ts
│   │
│   └── e2e/
│       ├── login.spec.ts
│       └── dynamic-login.spec.ts
│
├── utils/
│   └── UserFactory.ts
│
└── .github/
    └── workflows/
        └── playwright.yml
```

---

## Architecture

### API Layer

API interactions are isolated through dedicated client classes.

```text
BaseApi
├── AuthApi
└── UsersApi
```

This approach centralizes request management and reduces duplication.

---

### UI Layer

The framework adopts the Page Object Model pattern.

```text
LoginPage
HomePage
```

This separation keeps tests readable and minimizes maintenance effort when UI changes occur.

---

### Dynamic Test Data

Test data is generated dynamically through factories.

Example:

```typescript
const user = UserFactory.create();
```

This strategy eliminates dependency on shared static accounts and improves test reliability.

---

## Test Coverage

### API Tests

Authentication:

* Successful login
* Invalid credentials validation

Users:

* User creation

### UI Tests

Authentication:

* Invalid credentials validation
* Required fields validation

Integrated Flow:

* Create user via API
* Authenticate via UI
* Validate successful navigation

---

## Running Tests

Install dependencies:

```bash
npm install
```

Run all tests:

```bash
npx playwright test
```

Run UI tests only:

```bash
npx playwright test tests/e2e
```

Run API tests only:

```bash
npx playwright test tests/api
```

Open HTML report:

```bash
npx playwright show-report
```

---

## Continuous Integration

GitHub Actions automatically executes:

* Code quality validation
* Playwright test execution
* HTML report generation
* Test artifact publishing

Pipeline execution is triggered on:

* Push to main
* Pull requests targeting main

---

## Design Decisions

Some architectural decisions adopted in this project:

* Dynamic test data instead of static accounts
* Separation between UI and API layers
* Reusable API clients
* Centralized environment configuration
* CI-first approach

These choices aim to improve maintainability, scalability and execution reliability.

---

## Roadmap

Future improvements planned for the framework:

* Multi-environment support
* Advanced reporting strategy
* Test tagging strategy
* Data builders
* Contract testing
* Parallel execution optimization

---

## Author

Created by Élcio Santos Filho as part of a Software Quality Engineering mentoring challenge focused on building a scalable Playwright automation framework.
