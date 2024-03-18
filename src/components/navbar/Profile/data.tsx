import {
  Cloud,
  Github,
  LifeBuoy,
  Mail,
  MessageSquare,
  Plus,
  PlusCircle,
  Settings,
  User,
  UserPlus,
} from "lucide-react";
import { IDropdownItem } from "./dropdown-item";

export const group1: IDropdownItem[] = [
  {
    title: "Profile",
    icon: <User className="mr-2 h-4 w-4" />,
    href: "/user/profile",
    label: "⇧⌘P",
  },
  {
    title: "Settings",
    href: "/user/settings",
    icon: <Settings className="mr-2 h-4 w-4" />,
    label: "⌘S",
  },
];
export const group2: IDropdownItem[] = [
  {
    title: "Personal practice",
    icon: <User className="mr-2 h-4 w-4" />,
  },
  {
    title: "Invite users",
    icon: <UserPlus className="mr-2 h-4 w-4" />,
    subMenu: [
      {
        title: "Email",
        icon: <Mail className="mr-2 h-4 w-4" />,
      },
      {
        title: "Message",
        icon: <MessageSquare className="mr-2 h-4 w-4" />,
      },
      {
        title: "More...",
        icon: <PlusCircle className="mr-2 h-4 w-4" />,
      },
    ],
  },
  {
    title: "New Feature",
    icon: <Plus className="mr-2 h-4 w-4" />,
    label: "⌘+T",
  },
];

export const group3: IDropdownItem[] = [
  {
    title: "GitHub",
    icon: <Github className="mr-2 h-4 w-4" />,
  },
  {
    title: "Support",
    icon: <LifeBuoy className="mr-2 h-4 w-4" />,
  },
  {
    title: "API",
    icon: <Cloud className="mr-2 h-4 w-4" />,
    disabled: true,
  },
];
