"use server";

import { currentUser } from "@/lib/auth";
import { db } from "@/lib/db";
import { Salat } from "@prisma/client";

// values Salat
export const setSalat = async (values: any): Promise<Data<Salat>> => {
  const user = await currentUser();

  if (!user?.id) {
    return { error: "User not logged in!(S:12)" };
  }

  const today = new Date();
  today.setHours(0, 0, 0, 0); // Set hours to beginning of the day

  try {
    let salat = await db.salat.findFirst({
      where: {
        date: {
          gte: today,
          lt: new Date(today.getTime() + 24 * 60 * 60 * 1000), // End of the day
        },
      },
    });

    if (salat) {
      const updateData = {
        name: {
          ...salat.name,
          bn: "Bangle Name",
        },
      };
      salat = await db.salat.update({
        where: {
          id: salat.id,
        },
        data: {
          ...updateData,
        },
      });
      return { success: "Salat Update!(S:43) ✅", data: salat };
    } else {
      salat = await db.salat.create({
        data: {
          date: today,
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
      return { success: "Salat Added!(S:58) ✅", data: salat };
    }
  } catch (error) {
    return { success: "Something want Wrong!(S:61) ❌" };
  }
};
