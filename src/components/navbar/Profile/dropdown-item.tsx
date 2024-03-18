import {
  DropdownMenuItem,
  DropdownMenuShortcut,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { FC } from "react";

export interface IDropdownItem {
  title: string;
  icon: JSX.Element;
  href?: string;
  label?: string;
  disabled?: boolean;
  onclick?: () => void;
  subMenu?: IDropdownItem[];
}

const DropdownItemProvider: FC<IDropdownItem & IChildren> = ({
  children,
  href,
  ...props
}) =>
  href ? (
    <Link href={href}>
      <DropdownMenuItem
        className="focus:bg-slate-900 data-[state=open]:bg-slate-900 focus:text-slate-300 focus:cursor-pointer"
        {...props}
      >
        {children}
      </DropdownMenuItem>
    </Link>
  ) : (
    <DropdownMenuItem
      className="focus:bg-slate-900 data-[state=open]:bg-slate-900 focus:text-slate-300 focus:cursor-pointer"
      {...props}
    >
      {children}
    </DropdownMenuItem>
  );

export const DropdownItem: FC<IDropdownItem> = ({
  icon,
  title,
  label,
  ...others
}) => (
  <DropdownItemProvider title={title} label={label} icon={icon} {...others}>
    {icon}
    <span>{title}</span>
    {label && <DropdownMenuShortcut>{label}</DropdownMenuShortcut>}
  </DropdownItemProvider>
);
