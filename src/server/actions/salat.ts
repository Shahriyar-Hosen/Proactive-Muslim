"use server";

import { currentUser } from "@/lib/auth";
import { db } from "@/lib/db";
import { Salat } from "@prisma/client";

export const createSalat = async (values: any): Promise<Data<Salat>> => {
  const user = await currentUser();

  if (!user?.id) {
    return { error: "User not logged in" };
  }

  const salat = await db.salat.create({
    data: {
      userId: user.id,
      name: {
        en: "English Name",
        bn: "English Name",
      },
      time: "Asr",
      priority: "Farz",
      complete: false,
    },
  });

  if (!salat) {
    return { error: "Salat Add failed! ❌" };
  }

  return { success: "Salat Added! ✅", data: salat };
};
