import { db } from "@/lib/db";

export const getUserByEmail = async (email: string) => {
  try {
    const user = await db.user.findUnique({ where: { email } });

    return user;
  } catch {
    return null;
  }
};

export const getUserById = async (userId: string) => {
  try {
    const user = await db.user.findUnique({ where: { id: userId } });

    return user;
  } catch (err) {
    return null;
  }
};
