import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { useTranslations } from "next-intl";
import { FC } from "react";

export type IProps = { pre: { label: string; link: string }; current: string };
export const CustomBreadcrumb: FC<IProps> = ({ current, pre }) => {
  const t = useTranslations("HomePage");

  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/">{t("page-label")}</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink href={pre.link}>{pre.label}</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>{current}</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
};

/* 
<BreadcrumbItem>
    <DropdownMenu>
    <DropdownMenuTrigger className="flex items-center gap-1">
        <BreadcrumbEllipsis className="h-4 w-4" />
        <span className="sr-only">Toggle menu</span>
    </DropdownMenuTrigger>
    <DropdownMenuContent align="start">
        <DropdownMenuItem>Documentation</DropdownMenuItem>
        <DropdownMenuItem>Themes</DropdownMenuItem>
        <DropdownMenuItem>GitHub</DropdownMenuItem>
    </DropdownMenuContent>
    </DropdownMenu>
</BreadcrumbItem>
<BreadcrumbSeparator />
*/
