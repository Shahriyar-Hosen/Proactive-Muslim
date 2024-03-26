"use server";

import { currentUser } from "@/lib/auth";
import { db } from "@/lib/db";
import { ISalatSchema } from "@/lib/schemas";
import { Salat } from "@prisma/client";

export const createManySalat = async (data: Salat[]) => {
  const user = await currentUser();

  if (!user?.id) {
    return { error: "User not logged in!(S:12)" };
  }

  try {
    data.forEach((obj) => {
      obj["userId"] = user.id!;
    });

    const createMany = await db.salat.createMany({
      data: data,
    });
    return { success: "Salat Added!(S:23) ✅", data: createMany };
  } catch (error) {
    return { error: "Something want Wrong!(S:25) ❌" };
  }
};

export const createOrUpdateSalat = async ({
  name,
  time,
  priority,
  date: dateValue,
  ...others
}: ISalatSchema): Promise<Data<ISalat>> => {
  const user = await currentUser();

  if (!user?.id) {
    return { error: "User not logged in!(S:39)" };
  }

  const date = new Date(dateValue);
  date.setHours(0, 0, 0, 0); // Set hours to beginning of the day
  const endOfDate = new Date(date.getTime() + 24 * 60 * 60 * 1000);

  try {
    const salat = await db.salat.findFirst({
      where: {
        userId: user.id,
        name: name,
        time: time,
        priority: priority,
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
          name: name,
          time: time,
          priority: priority,
          ...others,
        },
      });

      return { success: "Salat Added!(S:72) ✅", data: create };
    } else {
      const update = await db.salat.update({
        where: { id: salat.id },
        data: { ...others },
      });

      return { success: "Salat Added!(S:79) ✅", data: update };
    }
  } catch (error) {
    console.log("🚀 ~ error:", error);
    return { error: "Something want Wrong!(S:82) ❌" };
  }
};

export const getSalat = async (filterDate: Date): Promise<Data<Salat[]>> => {
  try {
    const user = await currentUser();

    if (!user?.id) {
      return { error: "User not logged in!(S:91)" };
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

    return { success: "Salat Added!(S:108) ✅", data: salats };
  } catch (error) {
    console.log("🚀 ~ getSalat ~ error:", error);
    return { error: "Something want Wrong!(S:110) ❌" };
  }
};
