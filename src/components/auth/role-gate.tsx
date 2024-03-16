"use client";

import { UserRole } from "@prisma/client";

import { FormError } from "@/components/form/form-error";
import { useCurrentRole } from "@/hooks/use-current-role";

interface RoleGateProps extends IChildren {
  allowedRole: UserRole;
}

export const RoleGate = ({ children, allowedRole }: RoleGateProps) => {
  const role = useCurrentRole();

  if (role !== allowedRole) {
    return (
      <FormError message="You do not have permission to view this content!" />
    );
  }

  return <>{children}</>;
};
