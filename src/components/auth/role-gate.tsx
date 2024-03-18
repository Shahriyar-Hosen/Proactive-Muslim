"use client";

import { UserRole } from "@prisma/client";

import { FormError } from "@/components/form/form-error";
import { useCurrentRole } from "@/hooks/use-current-role";
import { FC } from "react";

interface RoleGateProps extends IChildren {
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
