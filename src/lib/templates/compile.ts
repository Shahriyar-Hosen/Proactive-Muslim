"use client";

import * as handlebars from "handlebars";
import {
  emailVerificationTemplate,
  resetPasswordTemplate,
  twoFactorTokenEmailTemplate,
} from ".";

export const compileEmailVerificationTemplate = (name: string, url: string) => {
  const template = handlebars.compile(emailVerificationTemplate);
  const htmlBody = template({ name: name, url: url });
  return htmlBody;
};
export const compileResetPasswordTemplate = (url: string) => {
  const template = handlebars.compile(resetPasswordTemplate);
  const htmlBody = template({ url: url });
  return htmlBody;
};
export const compile2FATemplate = (code: string) => {
  const template = handlebars.compile(twoFactorTokenEmailTemplate);
  const htmlBody = template({ code: code });
  return htmlBody;
};
