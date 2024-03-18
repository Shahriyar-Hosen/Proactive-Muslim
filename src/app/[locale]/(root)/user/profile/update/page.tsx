"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Gender, UserRole } from "@prisma/client";
import { useSession } from "next-auth/react";
import { useEffect, useState, useTransition } from "react";
import { useForm } from "react-hook-form";

import { CustomBreadcrumb } from "@/components/Breadcrumb";
import { FormError } from "@/components/form/form-error";
import { FormSuccess } from "@/components/form/form-success";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { useCurrentUser } from "@/hooks/use-current-user";
import { IUserSchema, UserSchema } from "@/lib/schemas";
import { userProfile } from "@/server/actions/user-profile";

const ProfilePage = () => {
  const user = useCurrentUser();

  const [error, setError] = useState<string | undefined>();
  const [success, setSuccess] = useState<string | undefined>();
  const { update } = useSession();
  const [isPending, startTransition] = useTransition();

  const oauth = user?.isOAuth;

  useEffect(() => {
    if (success || error) {
      const timeoutId = setTimeout(
        () => {
          // Clear the message after 5 seconds
          success ? setSuccess(undefined) : setError(undefined);
        },
        success ? 5000 : 15000
      );

      // Clean up the timeout when the component unmounts
      return () => clearTimeout(timeoutId);
    }
  }, [success, error]);

  const form = useForm<IUserSchema>({
    resolver: zodResolver(UserSchema),
    defaultValues: {
      password: undefined,
      newPassword: undefined,
      name: user?.name || undefined,
      email: user?.email || undefined,
      phone: user?.phone || undefined,
      gender: user?.gender || undefined,
      role: user?.role || undefined,
      isTwoFactorEnabled: user?.isTwoFactorEnabled || undefined,
    },
  });

  const onSubmit = (values: IUserSchema) => {
    startTransition(() => {
      userProfile(values)
        .then((data) => {
          if (data.error) {
            setError(data.error);
            setSuccess(undefined);
          }

          if (data.success) {
            update();
            form.reset();
            setSuccess(data.success);
            setError(undefined);
          }
        })
        .catch(() => setError("Something went wrong!"));
    });
  };

  return (
    <div className="mt-5">
      <CustomBreadcrumb
        current="Update Profile"
        pre={{ label: "Profile", link: "/user/profile" }}
      />
      <Card className="w-full mt-5 max-w-screen-lg mx-auto bg-slate-900/70 text-white border-slate-600 relative">
        <CardHeader>
          <p className="text-2xl font-semibold text-center">
            {user?.gender === "Male" ? "🙎🏻‍♂️" : "🧕🏻"} Update Profile
          </p>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form className="space-y-6" onSubmit={form.handleSubmit(onSubmit)}>
              <div className="space-y-4">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          placeholder="John Doe"
                          disabled={isPending}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          placeholder="john.doe@example.com"
                          type="email"
                          disabled={oauth || isPending}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Phone</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          placeholder="01511222333"
                          type="text"
                          disabled={isPending}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="gender"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Gender</FormLabel>
                      <Select
                        disabled={isPending}
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a gender" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value={Gender.Male}>Male</SelectItem>
                          <SelectItem value={Gender.Female}>Female</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="role"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Role</FormLabel>
                      <Select
                        disabled={isPending || user?.role !== "ADMIN"}
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a role" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value={UserRole.ADMIN}>Admin</SelectItem>
                          <SelectItem value={UserRole.USER}>User</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="pt-2.5" />
                <span
                  aria-disabled
                  className="aria-disabled:cursor-not-allowed"
                >
                  <Dialog>
                    <DialogTrigger
                      asChild
                      className="w-full bg-inherit border-slate-600 text-inherit hover:text-slate-300"
                      disabled={oauth}
                    >
                      <Button variant="outline" className="text-start">
                        Update Password
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px]">
                      <DialogHeader>
                        <DialogTitle>Set Password</DialogTitle>
                        <DialogDescription>
                          If you want to change password then set new password
                          from here
                        </DialogDescription>
                      </DialogHeader>
                      <>
                        <FormField
                          control={form.control}
                          name="password"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Old Password</FormLabel>
                              <FormControl>
                                <Input
                                  {...field}
                                  placeholder="******"
                                  type="password"
                                  disabled={isPending}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="newPassword"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>New Password</FormLabel>
                              <FormControl>
                                <Input
                                  {...field}
                                  placeholder="******"
                                  type="password"
                                  disabled={isPending}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </>
                      <DialogFooter>
                        <span onClick={form.handleSubmit(onSubmit)}>
                          <DialogClose asChild>
                            <Button
                              type="submit"
                              disabled={isPending}
                              className="bg-cyan-400/70 hover:bg-cyan-400 disabled:bg-cyan-500/25 hover:cursor-pointer disabled:cursor-not-allowed"
                            >
                              Update Password
                            </Button>
                          </DialogClose>
                        </span>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>
                </span>
                <FormField
                  control={form.control}
                  name="isTwoFactorEnabled"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-center justify-between rounded-lg border border-slate-600 p-3 shadow-sm">
                      <div className="space-y-0.5">
                        <FormLabel className="cursor-pointer">
                          Two Factor Authentication
                        </FormLabel>
                        <FormDescription>
                          Enable two factor authentication for your account
                        </FormDescription>
                      </div>
                      <FormControl>
                        <Switch
                          disabled={isPending}
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>
              <FormError message={error} />
              <FormSuccess message={success} />
              <Button
                disabled={isPending}
                type="submit"
                className="bg-cyan-400/70 hover:bg-cyan-400 disabled:bg-cyan-500/25 hover:cursor-pointer disabled:cursor-not-allowed"
              >
                Save
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProfilePage;
