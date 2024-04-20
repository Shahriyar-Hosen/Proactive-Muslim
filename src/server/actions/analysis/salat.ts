"use server";

import { currentUser } from "@/lib/auth";
import { db } from "@/lib/db";
import { pastDays } from "@/lib/utils";

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

const salatCount = async (id: string, time: SalahTime, day: number) => {
  const previous = previousDay(day);
  const salats = await db.salat.count({
    where: {
      userId: id,
      time: time,
      priority: "Farz",
      date: {
        gte: previous.end,
        lt: previous.start,
      },
    },
  });

  return salats;
};

export const get7DaySalat = async () => {
  try {
    const user = await currentUser();

    if (!user?.id) {
      return { error: "User not logged in!(S:91)" };
    }

    let prvDays = pastDays(7);

    const prvSalatCount = async (index: number) => {
      const date = prvDays[index];
      const getPrvDay = new Date(date);
      getPrvDay.setHours(0, 0, 0, 0); // Set hours to beginning of the day

      const salat = await db.salat.count({
        where: {
          userId: user.id,
          priority: "Farz",
          date: {
            gte: getPrvDay,
            lt: date,
          },
        },
        select: {
          complete: true,
          jamat: true,
          firstTakbeer: true,
        },
      });

      const day = new Date(date).getDate();
      const formattedDay = day >= 10 ? day : "0" + day;

      return {
        day: formattedDay,
        ...salat,
      };
    };

    const day1 = await prvSalatCount(0);
    const day2 = await prvSalatCount(1);
    const day3 = await prvSalatCount(2);
    const day4 = await prvSalatCount(3);
    const day5 = await prvSalatCount(4);
    const day6 = await prvSalatCount(5);
    const day7 = await prvSalatCount(6);

    const salats = [day7, day6, day5, day4, day3, day2, day1];

    return { success: "Salat Added!(S:108) ✅", data: salats };
  } catch (error) {
    console.log("🚀 ~ getSalat ~ error:", error);
    return { error: "Something want Wrong!(S:110) ❌" };
  }
};

export const get40DaySalat = async () => {
  try {
    const user = await currentUser();

    if (!user?.id) {
      return { error: "User not logged in!(S:91)" };
    }

    const fajrCount = await salatCount(user.id, "Fajr", 40);
    const zuhrCount = await salatCount(user.id, "Zuhr", 40);
    const asrCount = await salatCount(user.id, "Asr", 40);
    const maghribCount = await salatCount(user.id, "Maghrib", 40);
    const ishaCount = await salatCount(user.id, "Isha", 40);

    const salats = {
      fajr: fajrCount,
      zuhr: zuhrCount,
      asr: asrCount,
      maghrib: maghribCount,
      isha: ishaCount,
    };

    return { success: "Salat Added!(S:108) ✅", data: salats };
  } catch (error) {
    console.log("🚀 ~ getSalat ~ error:", error);
    return { error: "Something want Wrong!(S:110) ❌" };
  }
};

export const get120DaySalat = async () => {
  try {
    const user = await currentUser();

    if (!user?.id) {
      return { error: "User not logged in!(S:91)" };
    }

    const fajrCount = await salatCount(user.id, "Fajr", 120);
    const zuhrCount = await salatCount(user.id, "Zuhr", 120);
    const asrCount = await salatCount(user.id, "Asr", 120);
    const maghribCount = await salatCount(user.id, "Maghrib", 120);
    const ishaCount = await salatCount(user.id, "Isha", 120);

    const salats = {
      fajr: fajrCount,
      zuhr: zuhrCount,
      asr: asrCount,
      maghrib: maghribCount,
      isha: ishaCount,
    };

    return { success: "Salat Added!(S:108) ✅", data: salats };
  } catch (error) {
    console.log("🚀 ~ getSalat ~ error:", error);
    return { error: "Something want Wrong!(S:110) ❌" };
  }
};
