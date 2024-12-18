const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "94daeab24c8979",
    pass: "dad0bf7fcf8fef",
  },
});

exports.sendPasswordResetEmail = async (email, resetToken) => {
  const resetUrl = `http://localhost:5173/reset-password?token=${resetToken}`;

  const mailOptions = {
    from: '"Your E-commerce Store" <rahulrudendru@gmail.com>',
    to: email,
    subject: "Password Reset Request",
    html: `
      <h1>Password Reset</h1>
      <p>You requested a password reset. Please click the link below to reset your password:</p>
      <a href="${resetUrl}">Reset Password</a>
      <p>If you didn't request this, please ignore this email.</p>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log("Password reset email sent successfully");
    return mailOptions;
  } catch (error) {
    console.error("Error sending password reset email:", error);
    throw new Error("Failed to send password reset email");
  }
};
