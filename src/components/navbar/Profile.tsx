/* eslint-disable @next/next/no-img-element */
import { cn } from "@/lib/utils";
import { FC, useState } from "react";

export const Profile: FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative ml-3">
      <div onClick={() => setOpen((prv) => !prv)}>
        <div className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 w-8 h-8">
          <img
            className="h-8 w-8 rounded-full"
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt=""
          />
        </div>
      </div>
      {open && (
        <div>
          <div className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div>
              <a
                href="#"
                className={cn(
                  "block px-4 py-2 text-sm text-gray-700 bg-gray-100"
                )}
              >
                Your Profile
              </a>
            </div>
            <div>
              <a
                href="#"
                className={cn(
                  "block px-4 py-2 text-sm text-gray-700 bg-gray-100"
                )}
              >
                Settings
              </a>
            </div>
            <div>
              <a
                href="#"
                className={cn(
                  "block px-4 py-2 text-sm text-gray-700 bg-gray-100"
                )}
              >
                Sign out
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
