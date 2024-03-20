import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FC } from "react";

interface LinkButtonProps {
  href: string;
  label: string;
}

export const LinkButton: FC<LinkButtonProps> = ({ href, label }) => {
  return (
    <Button variant="link" className="font-normal w-full" size="sm" asChild>
      <Link href={href}>{label}</Link>
    </Button>
  );
};
