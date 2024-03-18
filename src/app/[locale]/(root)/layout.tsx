import { Navbar } from "@/components/navbar";
import { FC } from "react";

const PageLayout: FC<IChildren> = ({ children }) => (
  <>
    <Navbar />
    {children}
  </>
);

export default PageLayout;
