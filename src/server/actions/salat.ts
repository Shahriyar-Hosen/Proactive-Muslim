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

  const date = new Date();
  date.setHours(0, 0, 0, 0); // Set hours to beginning of the day
  const endOfDate = new Date(date.getTime() + 24 * 60 * 60 * 1000);

  try {
    const salat = await db.salat.findFirst({
      where: {
        userId: user.id,
        name: "Fajr",
        time: "Fajr",
        priority: "Farz",
        date: {
          gte: date,
          lt: endOfDate, // End of the day
        },
      },
    });

    if (!salat) {
      const create = await db.salat.create({
        data: {
          date: date,
          userId: user.id,
          name: "Fajr",
          time: "Fajr",
          priority: "Farz",
          rakats: 4,
          complete: false,
          jamat: false,
          firstTakbeer: false,
          concentration: 0,
        },
      });
      return { success: "Salat Added!(S:58) ✅", data: create };
    } else {
      const update = await db.salat.update({
        where: {
          id: salat.id,
        },
        data: {
          name: "Isha",
          time: "Isha",
        },
      });

      return { success: "Salat Added!(S:58) ✅", data: update };
    }
  } catch (error) {
    return { error: "Something want Wrong!(S:61) ❌" };
  }
};

export const getSalat = async (filterDate: Date): Promise<Data<Salat[]>> => {
  try {
    const user = await currentUser();

    if (!user?.id) {
      return { error: "User not logged in!(S:62)" };
    }

    const date = new Date(filterDate);
    date.setHours(0, 0, 0, 0); // Set hours to beginning of the day
    const endOfDate = new Date(date.getTime() + 24 * 60 * 60 * 1000);

    const salats = await db.salat.findMany({
      where: {
        userId: user.id,
        date: {
          gte: date,
          lt: endOfDate, // End of the day
        },
      },
    });

    return { success: "Salat Added!(S:74) ✅", data: salats };
  } catch (error) {
    return { error: "Something want Wrong!(S:76) ❌" };
  }
};
