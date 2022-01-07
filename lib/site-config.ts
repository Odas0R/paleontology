export const isDev = process.env.NODE_ENV !== "production";
export const basePath = isDev
  ? "http://localhost:3000"
  : process.env.PRODUCTION_URL;
