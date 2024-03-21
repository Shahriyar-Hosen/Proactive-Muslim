"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useSearchParams } from "next/navigation";
import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";

import { CardWrapper } from "@/components/auth/card-wrapper";
import { FormError } from "@/components/form/form-error";
import { FormSuccess } from "@/components/form/form-success";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { INewPasswordSchema, NewPasswordSchema } from "@/lib/schemas";
import { newPassword } from "@/server/actions/auth/new-password";
import { useTranslations } from "next-intl";

export const NewPasswordForm = () => {
  const searchParams = useSearchParams();
  const token = searchParams.get("token");

  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");
  const [isPending, startTransition] = useTransition();

  const t = useTranslations("Auth");

  const form = useForm<INewPasswordSchema>({
    resolver: zodResolver(NewPasswordSchema),
    defaultValues: {
      password: "",
    },
  });

  const onSubmit = (values: INewPasswordSchema) => {
    setError("");
    setSuccess("");

    startTransition(() => {
      newPassword(values, token).then((data) => {
        setError(data?.error);
        setSuccess(data?.success);
      });
    });
  };

  return (
    <CardWrapper
      headerLabel={t("NewPassword.headerLabel")}
      backButtonLabel={t("back-to-login")}
      backButtonHref="/auth/login"
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="space-y-4">
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t("password")}</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      disabled={isPending}
                      placeholder="******"
                      type="password"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormError message={error} />
          <FormSuccess message={success} />
          <Button
            disabled={isPending}
            type="submit"
            className="w-full bg-cyan-500/60 hover:bg-cyan-400/70"
          >
            {t("NewPassword.button")}
          </Button>
        </form>
      </Form>
    </CardWrapper>
  );
};
