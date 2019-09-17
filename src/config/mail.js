/**
 * Serviços de email
 * - Amazon SES (aplicação online)
 * - Mailgun (aplicação online)
 * - Sparkpost (aplicação online)
 * - Mailtrap (a ser utilizado apenas em ambiente de desenvolvimento.)
 */

export default {
  host: process.env.MAIL_HOST,
  port: process.env.MAIL_PORT,
  secure: false,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
  default: {
    from: 'FIGGY | Equipe FIGGY <newton@figgy.com.br>',
  },
};
