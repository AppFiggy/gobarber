// O sentry faz sentido apenas em ambiente de produção
export default {
  dsn: process.env.SENTRY_DSN,
};
