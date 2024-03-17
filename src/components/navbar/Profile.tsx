import {
  Cloud,
  Github,
  LifeBuoy,
  LogOut,
  Mail,
  MessageSquare,
  Plus,
  PlusCircle,
  Settings,
  User,
  UserPlus,
} from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useCurrentUser } from "@/hooks/use-current-user";
import { cn } from "@/lib/utils";
import { FC } from "react";

interface IDropdownItem {
  title: string;
  onclick: () => void;
  icon: JSX.Element;
  label?: string;
  disabled?: boolean;
  subMenu?: IDropdownItem[];
}

const itemStyles =
  "focus:bg-slate-900 data-[state=open]:bg-slate-900 focus:text-slate-300 focus:cursor-pointer";
const menuBgStyles = "bg-slate-800 border-slate-900 text-slate-300";

const group1: IDropdownItem[] = [
  {
    title: "Profile",
    icon: <User className="mr-2 h-4 w-4" />,
    onclick: () => {},
    label: "⇧⌘P",
  },
  {
    title: "Settings",
    onclick: () => {},
    icon: <Settings className="mr-2 h-4 w-4" />,
    label: "⌘S",
  },
];
const group2: IDropdownItem[] = [
  {
    title: "Personal practice",
    icon: <User className="mr-2 h-4 w-4" />,
    onclick: () => {},
  },
  {
    title: "Invite users",
    icon: <UserPlus className="mr-2 h-4 w-4" />,
    onclick: () => {},
    subMenu: [
      {
        title: "Email",
        icon: <Mail className="mr-2 h-4 w-4" />,
        onclick: () => {},
      },
      {
        title: "Message",
        icon: <MessageSquare className="mr-2 h-4 w-4" />,
        onclick: () => {},
      },
      {
        title: "More...",
        icon: <PlusCircle className="mr-2 h-4 w-4" />,
        onclick: () => {},
      },
    ],
  },
  {
    title: "New Feature",
    onclick: () => {},
    icon: <Plus className="mr-2 h-4 w-4" />,
    label: "⌘+T",
  },
];

const group3: IDropdownItem[] = [
  {
    title: "GitHub",
    icon: <Github className="mr-2 h-4 w-4" />,
    onclick: () => {},
  },
  {
    title: "Support",
    onclick: () => {},
    icon: <LifeBuoy className="mr-2 h-4 w-4" />,
  },
  {
    title: "API",
    onclick: () => {},
    icon: <Cloud className="mr-2 h-4 w-4" />,
    disabled: true,
  },
  {
    title: "Log out",
    onclick: () => {},
    icon: <LogOut className="mr-2 h-4 w-4" />,
    label: "⇧⌘Q",
  },
];

const DropdownItem: FC<IDropdownItem> = ({
  title,
  label,
  onclick,
  icon,
  disabled,
}) => (
  <DropdownMenuItem
    className={itemStyles}
    onClick={onclick}
    disabled={disabled}
  >
    {icon}
    <span>{title}</span>
    {label && <DropdownMenuShortcut>{label}</DropdownMenuShortcut>}
  </DropdownMenuItem>
);

export const Profile: FC = () => {
  const user = useCurrentUser();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Avatar>
          <AvatarImage src={user?.image || ""} alt="@proactive-muslim" />
          <AvatarFallback>AS</AvatarFallback>
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
                <DropdownMenuSubTrigger className={itemStyles}>
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
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
