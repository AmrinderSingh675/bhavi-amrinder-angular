export const API_ENDPOINTS = {
  AUTH: {
    LOGIN: 'auth/login',
    REGISTER: 'auth/register'
  },

  USERS: {
    GET_ALL: 'users',
    GET_BY_ID: (id: number) => `users/${id}`,
    CREATE: 'users',
    UPDATE: (id: number) => `users/${id}`,
    DELETE: (id: number) => `users/${id}`
  }
};