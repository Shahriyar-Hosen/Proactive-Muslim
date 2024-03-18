import {
  DropdownMenuItem,
  DropdownMenuShortcut,
} from "@/components/ui/dropdown-menu";
import { FC } from "react";

export interface IDropdownItem {
  title: string;
  onclick: () => void;
  icon: JSX.Element;
  label?: string;
  disabled?: boolean;
  subMenu?: IDropdownItem[];
}

export const DropdownItem: FC<IDropdownItem> = ({
  title,
  label,
  onclick,
  icon,
  disabled,
}) => (
  <DropdownMenuItem
    className="focus:bg-slate-900 data-[state=open]:bg-slate-900 focus:text-slate-300 focus:cursor-pointer"
    onClick={onclick}
    disabled={disabled}
  >
    {icon}
    <span>{title}</span>
    {label && <DropdownMenuShortcut>{label}</DropdownMenuShortcut>}
  </DropdownMenuItem>
);
