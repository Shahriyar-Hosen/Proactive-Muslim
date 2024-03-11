// "use server";

// import { revalidatePath } from "next/cache";
// import { prisma } from "../db/prism";
// import { handleError } from "./utils";

// // CREATE
// export const createUser = async (user: any): Promise<any> => {
//   try {
//     console.log("🚀 ~ createUser ~ createUser:");
//     const newUser = await prisma.user.create({
//       data: user,
//     });
//     console.log("🚀 ~ createUser ~ newUser:", { newUser });

//     return JSON.parse(JSON.stringify(newUser));
//   } catch (error) {
//     handleError(error);
//   }
// };

// // Red
// export const getUserById = async (
//   userId: string
// ): Promise<IUser | undefined> => {
//   try {
//     const user = await prisma.user.findUnique({
//       where: {
//         clerkId: userId,
//       },
//     });

//     console.log("🚀 ~ get UserBy Id:", { user });

//     if (!user) throw new Error("User not found");

//     return JSON.parse(JSON.stringify(user));
//   } catch (error) {
//     handleError(error);
//   }
// };

// // UPDATE
// export const updateUser = async (
//   clerkId: string,
//   user: any
// ): Promise<IUser | undefined> => {
//   try {
//     const updatedUser = await prisma.user.update({
//       data: user,
//       where: {
//         clerkId,
//       },
//     });

//     console.log("🚀 ~ updated User by clerkId:", { updatedUser });

//     if (!updatedUser) throw new Error("User update failed");

//     return JSON.parse(JSON.stringify(updatedUser));
//   } catch (error) {
//     handleError(error);
//   }
// };

// // DELETE
// export const deleteUser = async (clerkId: string): Promise<any> => {
//   try {
//     // Find user to delete
//     const userToDelete = await prisma.user.findUnique({
//       where: {
//         clerkId: clerkId,
//       },
//     });
//     console.log("🚀 ~ deleteUser ~ userToDelete:", userToDelete);

//     if (!userToDelete) {
//       throw new Error("User not found");
//     }

//     // Delete user
//     const deletedUser = await prisma.user.delete({
//       where: {
//         id: userToDelete.id,
//       },
//     });
//     console.log("🚀 ~ deleteUser ~ deletedUser:", deletedUser);
//     revalidatePath("/");

//     return deletedUser ? JSON.parse(JSON.stringify(deletedUser)) : null;
//   } catch (error) {
//     handleError(error);
//   }
// };
