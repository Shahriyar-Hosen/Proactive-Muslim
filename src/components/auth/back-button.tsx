"use client";

import Link from "next/link";

import { Button } from "@/components/ui/button";
import { FC } from "react";

interface BackButtonProps {
  href: string;
  label: string;
}

export const BackButton: FC<BackButtonProps> = ({ href, label }) => {
  return (
    <Button variant="link" className="font-normal w-full" size="sm" asChild>
      <Link href={href}>{label}</Link>
    </Button>
  );
};
