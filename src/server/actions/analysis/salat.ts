"use server";

import { currentUser } from "@/lib/auth";
import { db } from "@/lib/db";
import { addLeadingZero } from "@/lib/helpers";
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
  const result = await db.salat.count({
    where: {
      userId: id,
      time: time,
      priority: "Farz",
      complete: true,
      date: {
        gte: previous.end,
        lt: previous.start,
      },
    },
  });

  return result;
};

export const get7DaySalatBarChart = async () => {
  try {
    const user = await currentUser();

    if (!user?.id) {
      return { error: "User not logged in!(SA:47)" };
    }

    let prvDays = pastDays(10);

    const prvSalatCount = async (index: number) => {
      const date = prvDays[index];
      const getPrvDay = new Date(date);
      getPrvDay.setHours(0, 0, 0, 0);

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
      // const salat2 = await db.salat.findMany({
      //   where: {
      //     userId: user.id,
      //     priority: "Farz",
      //     complete: true,
      //     date: {
      //       gte: getPrvDay,
      //       lt: date,
      //     },
      //   },
      //   select: {
      //     name: true,
      //     date: true,
      //     id: true,
      //   },
      // });

      const day = new Date(date).getDate();
      const formattedDay = addLeadingZero(day);

      return {
        day: formattedDay,
        ...salat,
        // salat2,
      };
    };

    const day1 = await prvSalatCount(0);
    const day2 = await prvSalatCount(1);
    const day3 = await prvSalatCount(2);
    const day4 = await prvSalatCount(3);
    const day5 = await prvSalatCount(4);
    const day6 = await prvSalatCount(5);
    const day7 = await prvSalatCount(6);
    const day8 = await prvSalatCount(7);
    const day9 = await prvSalatCount(8);
    const day10 = await prvSalatCount(9);

    const salats = [
      day10,
      day9,
      day8,
      day7,
      day6,
      day5,
      day4,
      day3,
      day2,
      day1,
    ];

    // const testing = day8;
    // console.log("🚀 ~ get7DaySalatBarChart ~ day:", testing);

    return { success: "Salat Added!(SA:92) ✅", data: salats };
  } catch (error) {
    console.log("🚀 ~ get7DaySalatBarChart ~ (SA:94) ~ error:", error);
    return { error: "Something want Wrong!(SA:95) ❌" };
  }
};

export const getSalatCount = async (day: 7 | 15 | 30 | 40 | 80 | 120) => {
  try {
    const user = await currentUser();

    if (!user?.id) {
      return { error: "User not logged in!(SA:104)" };
    }

    const fajrCount = await salatCount(user.id, "Fajr", day);
    const zuhrCount = await salatCount(user.id, "Zuhr", day);
    const asrCount = await salatCount(user.id, "Asr", day);
    const maghribCount = await salatCount(user.id, "Maghrib", day);
    const ishaCount = await salatCount(user.id, "Isha", day);

    const salats = {
      fajr: fajrCount,
      zuhr: zuhrCount,
      asr: asrCount,
      maghrib: maghribCount,
      isha: ishaCount,
    };

    return { success: "Salat Added!(SA:121) ✅", data: salats };
  } catch (error) {
    console.log("🚀 ~ get120DaySalat ~ (SA:123) ~ error:", error);
    return { error: "Something want Wrong!(SA:124) ❌" };
  }
};
