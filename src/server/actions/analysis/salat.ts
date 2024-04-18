"use server";

import { currentUser } from "@/lib/auth";
import { db } from "@/lib/db";
import { Salat } from "@prisma/client";

const previousDay = (day: number) => {
  const currentDate = new Date();

  const previousDay = new Date(currentDate);
  previousDay.setDate(currentDate.getDate() - day);

  previousDay.setHours(0, 0, 0, 0); // Set hours to beginning of the day

  const startOfDate = currentDate;
  const endOfDate = previousDay;

  return {
    start: startOfDate,
    end: endOfDate,
  };
};

export const get7DaySalat = async (): Promise<Data<Salat[]>> => {
  try {
    const user = await currentUser();

    if (!user?.id) {
      return { error: "User not logged in!(S:91)" };
    }

    const previous = previousDay(7);

    console.log("🚀 ~ get7DaySalat ~ previous:", {
      gte: previous.start,
      lt: previous.end,
    });

    const salats = await db.salat.findMany({
      where: {
        userId: user.id,
        // time: selectedSalatTime,
        date: {
          gte: previous.end,
          lt: previous.start,
        },
      },
    });

    return { success: "Salat Added!(S:108) ✅", data: salats };
  } catch (error) {
    console.log("🚀 ~ getSalat ~ error:", error);
    return { error: "Something want Wrong!(S:110) ❌" };
  }
};
