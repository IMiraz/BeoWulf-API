import nodemailer from "nodemailer";

const from = '"BooksLib" <info@bookslib.com>';

function setup() {
  return nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });
}

export function sendConfirmationEmail(user) {
  const tranport = setup();
  const email = {
    from,
    to: user.email,
    subject: "Welcome to Bookslib",
    text: `
    Welcome to Bookslib. Please, confirm your email.
    ${user.generateConfirmationUrl()}
    `
  };

  tranport.sendMail(email);
}


export function sendResetPasswordEmail(user) {
  const tranport = setup();
  const email = {
    from,
    to: user.email,
    subject: "RESET YOUR PASSWORD",
    text: `
    Please Reset your password with blew link
    ${user.generateResetPasworddUrl()}
    `
  };

  tranport.sendMail(email);
}