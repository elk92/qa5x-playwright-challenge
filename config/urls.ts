import { ENVIRONMENT } from './enviroments';

export const URLS = {
  frontend: ENVIRONMENT.frontendUrl,

  api: ENVIRONMENT.apiUrl,

  login: `${ENVIRONMENT.apiUrl}/login`,

  users: `${ENVIRONMENT.apiUrl}/usuarios`,
};