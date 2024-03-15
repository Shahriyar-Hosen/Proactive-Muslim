"use client";

import { UserRole } from "@prisma/client";
import { FC, PropsWithChildren } from "react";

import { FormError } from "@/components/form-error";
import { useCurrentRole } from "@/hooks/use-current-role";

interface RoleGateProps extends PropsWithChildren {
  allowedRole: UserRole;
}

export const RoleGate: FC<RoleGateProps> = ({ children, allowedRole }) => {
  const role = useCurrentRole();

  if (role !== allowedRole) {
    return (
      <FormError message="You do not have permission to view this content!" />
    );
  }

  return <>{children}</>;
};
