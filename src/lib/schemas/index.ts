import {
  Gender,
  Priority,
  SalahName,
  SalahTime,
  UserRole,
} from "@prisma/client";
import * as z from "zod";

export const SalatUpdateSchema = z.object({
  date: z.date(),
  name: z.enum([
    SalahName.Fajr,
    SalahName.Zuhr,
    SalahName.Asr,
    SalahName.Maghrib,
    SalahName.Isha,
    SalahName.Witr,
    SalahName.Jumuah,
    SalahName.Janazah,
    SalahName.Taraweeh,
    SalahName.Qaza,
    SalahName.Tahajjud,
    SalahName.Ishraq,
    SalahName.Chasht,
    SalahName.Awabeen,
    SalahName.Tasbeeh,
    SalahName.Yadain,
    SalahName.Tawbah,
    SalahName.Istika,
    SalahName.Istikhara,
    SalahName.Hajat,
    SalahName.Musafir,
    SalahName.Shukr,
    SalahName.Tahiyatul_Azu,
    SalahName.Dukhulul_Masjid,
    SalahName.Jama_Binas_Salatain,
    SalahName.Kusuf,
    SalahName.Khusuf,
    SalahName.Maryaz,
    SalahName.Khaoof,
    SalahName.Jamaah,
  ]),
  time: z.enum([
    SalahTime.Fajr,
    SalahTime.Zuhr,
    SalahTime.Asr,
    SalahTime.Maghrib,
    SalahTime.Isha,
    SalahTime.Others,
  ]),
  priority: z.enum([
    Priority.Farz,
    Priority.Wajib,
    Priority.Sunnah,
    Priority.Nafal,
    Priority.Janazah,
  ]),
  complete: z.optional(z.boolean()),
  rakats: z.optional(z.number().nullable()),
  jamat: z.optional(z.boolean().nullable()),
  firstTakbeer: z.optional(z.boolean().nullable()),
  concentration: z.optional(z.number().nullable()),
  before: z.optional(z.boolean().nullable()),
  after: z.optional(z.boolean().nullable()),
});

export const UserSchema = z
  .object({
    name: z.optional(z.string()),
    isTwoFactorEnabled: z.optional(z.boolean()),
    gender: z.enum([Gender.Male, Gender.Female]),
    role: z.enum([UserRole.ADMIN, UserRole.USER]),
    email: z.optional(z.string().email()),
    phone: z.optional(z.string()),
    password: z.optional(z.string().min(6)),
    newPassword: z.optional(z.string().min(6)),
  })
  .refine(
    (data) => {
      if (data.password && !data.newPassword) {
        return false;
      }
      return true;
    },
    {
      message: "New password is required!",
      path: ["newPassword"],
    }
  )
  .refine(
    (data) => {
      if (data.newPassword && !data.password) {
        return false;
      }
      return true;
    },
    {
      message: "Password is required!",
      path: ["password"],
    }
  );

export const NewPasswordSchema = z.object({
  password: z.string().min(6, {
    message: "Minimum of 6 characters required",
  }),
});

export const ResetSchema = z.object({
  email: z.string().email({
    message: "Email is required",
  }),
});

export const LoginSchema = z.object({
  email: z.string().email({
    message: "Email is required",
  }),
  password: z.string().min(1, {
    message: "Password is required",
  }),
  code: z.optional(z.string()),
});

export const RegisterSchema = z.object({
  email: z.string().email({
    message: "Email is required",
  }),
  password: z.string().min(6, {
    message: "Minimum 6 characters required",
  }),
  name: z.string().min(1, {
    message: "Name is required",
  }),
});

export type IUserSchema = z.infer<typeof UserSchema>;
export type ISalatSchema = z.infer<typeof SalatUpdateSchema>;
export type INewPasswordSchema = z.infer<typeof NewPasswordSchema>;
export type IResetSchema = z.infer<typeof ResetSchema>;
export type ILoginSchema = z.infer<typeof LoginSchema>;
export type IRegisterSchema = z.infer<typeof RegisterSchema>;
