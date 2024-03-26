import { Gender, UserRole } from "@prisma/client";
import * as z from "zod";

export const SalatSchema = z.object({
  name: z.optional(z.string()),
  time: z.optional(z.string()),
  priority: z.optional(z.string()),
  complete: z.optional(z.boolean()),
  rakats: z.optional(z.number()),
  jamat: z.optional(z.boolean()),
  firstTakbeer: z.optional(z.boolean()),
  concentration: z.optional(z.boolean()),
  before: z.optional(z.boolean()),
  after: z.optional(z.boolean()),
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
export type ISalatSchema = z.infer<typeof SalatSchema>;
export type INewPasswordSchema = z.infer<typeof NewPasswordSchema>;
export type IResetSchema = z.infer<typeof ResetSchema>;
export type ILoginSchema = z.infer<typeof LoginSchema>;
export type IRegisterSchema = z.infer<typeof RegisterSchema>;
