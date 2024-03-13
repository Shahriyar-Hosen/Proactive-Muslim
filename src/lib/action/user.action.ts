"use server";

import { revalidatePath } from "next/cache";
import { prisma } from "../db";
import { handleError } from "../utils";

// CREATE
export const createUser = async (userData: any): Promise<any> => {
  try {
    const result = await prisma.user.create({
      data: userData,
    });
    console.log("🚀 ~ user.action createUser ~ result:", result);

    return JSON.parse(JSON.stringify(result));
  } catch (error) {
    handleError(error);
  }
};

// Red
export const getUserById = async (
  userId: string
): Promise<IUser | undefined> => {
  try {
    const user = await prisma.user.findUnique({
      where: {
        clerkId: userId,
      },
    });

    if (!user) throw new Error("User not found");

    return JSON.parse(JSON.stringify(user));
  } catch (error) {
    handleError(error);
  }
};

// UPDATE
export const updateUser = async (
  clerkId: string,
  user: any
): Promise<IUser | undefined> => {
  try {
    const updatedUser = await prisma.user.update({
      data: user,
      where: {
        clerkId,
      },
    });

    if (!updatedUser) throw new Error("User update failed");

    return JSON.parse(JSON.stringify(updatedUser));
  } catch (error) {
    handleError(error);
  }
};

// DELETE
export const deleteUser = async (clerkId: string): Promise<any> => {
  try {
    // Find user to delete
    const userToDelete = await prisma.user.findUnique({
      where: {
        clerkId: clerkId,
      },
    });

    if (!userToDelete) {
      throw new Error("User not found");
    }

    // Delete user
    const deletedUser = await prisma.user.delete({
      where: {
        id: userToDelete.id,
      },
    });
    revalidatePath("/");

    return deletedUser ? JSON.parse(JSON.stringify(deletedUser)) : null;
  } catch (error) {
    handleError(error);
  }
};
