export const ENDPOINTS = {
    AUTH: {
      LOGIN: "/auth/login",
      REFRESH_TOKEN: "/auth/refresh-token",
      LOGOUT: "/auth/logout",
    },
  
    USERS: {
      GET_ALL: "/users",
      GET_BY_ID: (id: string) => `/users/${id}`,
    },
  
    REPORTS: {
      GET_ALL: "/reports",
      UPLOAD: "/reports/upload",
    },
  };