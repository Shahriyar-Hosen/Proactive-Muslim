import { ExclamationTriangleIcon } from "@radix-ui/react-icons";
import { FC } from "react";

interface FormErrorProps {
  message?: string;
}

export const FormError: FC<FormErrorProps> = ({ message }) => {
  if (!message) return null;

  return (
    <div className="bg-destructive/15 p-3 rounded-md flex items-center gap-x-2 text-sm text-destructive">
      <ExclamationTriangleIcon className="h-4 w-4" />
      <p>{message}</p>
    </div>
  );
};
