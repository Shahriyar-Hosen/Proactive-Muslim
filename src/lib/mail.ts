import { createTransport } from "nodemailer";
import {
  compile2FATemplate,
  compileEmailVerificationTemplate,
  compileResetPasswordTemplate,
} from "./templates";

const domain = process.env.NEXT_PUBLIC_APP_URL;
const smtpEmail = process.env.SMTP_EMAIL;
const smtpPassword = process.env.SMTP_PASSWORD;
const defaultFrom = `☪️ Proactive Muslim ⇶ 🕋 🕌 🤲🏻 <${smtpEmail}>`;

type ISendMail = { to: string; subject: string; body: string };
export const sendMail = async ({ to, subject, body }: ISendMail) => {
  const transport = await createTransport({
    service: "gmail",
    priority: "high",
    auth: {
      user: smtpEmail,
      pass: smtpPassword,
    },
  });

  try {
    const testResult = await transport.verify();
    // console.log("🚀 ~ sendMail ~ testResult:", { testResult });
  } catch (error) {
    console.log("🚀 ~ sendMail ~ testResult ~ error:", error);
  }

  try {
    const sendResult = await transport.sendMail({
      from: defaultFrom,
      to,
      subject: `⭐ ${subject} 🔰 ⁜👉🏻⁜ Proactive Muslim ⁜👑⁜`,
      html: body,
    });
    // console.log("🚀 ~ sendMail ~ sendResult:", { sendResult });
  } catch (error) {
    console.log("🚀 ~ sendMail ~ sendResult ~ error:", error);
  }
};

export const sendTwoFactorTokenEmail = async (email: string, token: string) => {
  await sendMail({
    to: email,
    subject: "2FA Verification code",
    body: compile2FATemplate(token),
  });
};

export const sendPasswordResetEmail = async (email: string, token: string) => {
  const resetLink = `${domain}/auth/new-password?token=${token}`;
  await sendMail({
    to: email,
    subject: "Reset your password 🔐",
    body: compileResetPasswordTemplate(resetLink),
  });
};

export const sendVerificationEmail = async (email: string, token: string) => {
  const confirmLink = `${domain}/auth/new-verification?token=${token}`;
  await sendMail({
    to: email,
    subject: "Confirm your email 🔐",
    body: compileEmailVerificationTemplate("to Proactive Muslim", confirmLink),
  });
};
