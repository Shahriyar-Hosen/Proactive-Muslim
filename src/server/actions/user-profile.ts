"use server";

import bcrypt from "bcryptjs";

import { update } from "@/auth";
import { currentUser } from "@/lib/auth";
import { db } from "@/lib/db";
import { sendVerificationEmail } from "@/lib/mail";
import { IUserSchema } from "@/lib/schemas";
import { generateVerificationToken } from "@/lib/tokens";
import { getUserByEmail, getUserById } from "@/server/data/user";

export const userProfile = async (values: IUserSchema) => {
  const user = await currentUser();

  if (!user) {
    return { error: "Unauthorized" };
  }

  const dbUser = await getUserById(user.id!);

  if (!dbUser) {
    return { error: "Unauthorized" };
  }

  if (user.isOAuth) {
    values.email = undefined;
  }

  if (values.email && values.email !== user.email) {
    const existingUser = await getUserByEmail(values.email);

    if (existingUser && existingUser.id !== user.id) {
      return { error: "Email already in use!" };
    }

    const verificationToken = await generateVerificationToken(values.email);
    await sendVerificationEmail(
      verificationToken.email,
      verificationToken.token
    );

    return { success: "Verification email sent!" };
  }

  if (values.password && values.newPassword && dbUser.password) {
    const passwordsMatch = await bcrypt.compare(
      values.password,
      dbUser.password
    );

    if (!passwordsMatch) {
      return { error: "Incorrect password!" };
    }

    const hashedPassword = await bcrypt.hash(values.newPassword, 10);
    values.password = hashedPassword;
    values.newPassword = undefined;
  }

  const updatedUser = await db.user.update({
    where: { id: dbUser.id },
    data: {
      ...values,
    },
  });

  update({
    user: {
      name: updatedUser.name,
      email: updatedUser.email,
      role: updatedUser.role,
      gender: updatedUser.gender || undefined,
      phone: updatedUser.phone || undefined,
      isTwoFactorEnabled: updatedUser.isTwoFactorEnabled,
    },
  });

  return { success: "Profile Updated!" };
};
