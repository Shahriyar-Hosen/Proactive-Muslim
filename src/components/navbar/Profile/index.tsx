import { FC } from "react";

import { LogoutButton } from "@/components/auth/logout-button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useCurrentUser } from "@/hooks/use-current-user";
import { cn } from "@/lib/utils";
import { LogOut } from "lucide-react";
import { group1, group2, group3 } from "./data";
import { DropdownItem } from "./dropdown-item";

const menuBgStyles = "bg-slate-800 border-slate-900 text-slate-300";

export const Profile: FC = () => {
  const user = useCurrentUser();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className="cursor-pointer">
        <Avatar>
          <AvatarImage src={user?.image || ""} alt="@proactive-muslim" />
          <AvatarFallback className="bg-cyan-500 text-slate-800 font-medium">
            AS
          </AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent className={cn(menuBgStyles, "w-56")}>
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator className="bg-slate-600" />
        <DropdownMenuGroup>
          {group1.map((props, i) => (
            <DropdownItem key={i} {...props} />
          ))}
        </DropdownMenuGroup>
        <DropdownMenuSeparator className="bg-slate-600" />
        <DropdownMenuGroup>
          {group2.map(({ title, icon, subMenu, ...others }, i) =>
            subMenu ? (
              <DropdownMenuSub key={i}>
                <DropdownMenuSubTrigger className="focus:bg-slate-900 data-[state=open]:bg-slate-900 focus:text-slate-300 focus:cursor-pointer">
                  {icon}
                  <span>{title}</span>
                </DropdownMenuSubTrigger>
                <DropdownMenuPortal>
                  <DropdownMenuSubContent className={menuBgStyles}>
                    {subMenu.map(({ title, ...subOthers }, i) => (
                      <>
                        {title === "More..." && (
                          <DropdownMenuSeparator
                            key={i}
                            className="bg-slate-600"
                          />
                        )}
                        <DropdownItem key={i} title={title} {...subOthers} />
                      </>
                    ))}
                  </DropdownMenuSubContent>
                </DropdownMenuPortal>
              </DropdownMenuSub>
            ) : (
              <DropdownItem key={i} icon={icon} title={title} {...others} />
            )
          )}
        </DropdownMenuGroup>
        <DropdownMenuSeparator className="bg-slate-600" />
        <DropdownMenuGroup>
          {group3.map(({ title, ...others }) => (
            <>
              {title === "Log out" && (
                <DropdownMenuSeparator className="bg-slate-600" />
              )}
              <DropdownItem key={title} title={title} {...others} />
            </>
          ))}

          <LogoutButton>
            <DropdownItem
              title="Log out"
              label="⇧⌘Q"
              icon={<LogOut className="mr-2 h-4 w-4" />}
            />
          </LogoutButton>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
