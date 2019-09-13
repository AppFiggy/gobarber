/**
 * Serviços de email
 * - Amazon SES (aplicação online)
 * - Mailgun (aplicação online)
 * - Sparkpost (aplicação online)
 * - Mailtrap (a ser utilizado apenas em ambiente de desenvolvimento.)
 */

export default {
  host: 'smtp.mailtrap.io',
  port: 2525,
  secure: false,
  auth: {
    user: 'cca9459806da9c',
    pass: 'a9764389375c2a',
  },
  default: {
    from: 'FIGGY | Equipe FIGGY <newton@figgy.com.br>',
  },
};
