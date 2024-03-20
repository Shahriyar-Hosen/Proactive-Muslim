import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Dispatch, SetStateAction } from "react";

interface IProps {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

export const MobileMenuButton = ({ open, setOpen }: IProps) => (
  <div
    onClick={() => setOpen((prv) => !prv)}
    className="flex items-center md:hidden"
  >
    <div className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-slate-500 cursor-pointer">
      {open ? (
        <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
      ) : (
        <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
      )}
    </div>
  </div>
);
