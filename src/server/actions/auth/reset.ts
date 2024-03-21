"use server";

import { sendPasswordResetEmail } from "@/lib/mail";
import { IResetSchema, ResetSchema } from "@/lib/schemas";
import { generatePasswordResetToken } from "@/lib/tokens";
import { getUserByEmail } from "@/server/data/user";

export const reset = async (values: IResetSchema) => {
  const validatedFields = ResetSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Invalid emaiL!" };
  }

  const { email } = validatedFields.data;

  const existingUser = await getUserByEmail(email);

  if (!existingUser) {
    return { error: "Email not found!" };
  }

  const passwordResetToken = await generatePasswordResetToken(email);
  await sendPasswordResetEmail(
    passwordResetToken.email,
    passwordResetToken.token
  );

  return { success: "Reset email sent!" };
};
