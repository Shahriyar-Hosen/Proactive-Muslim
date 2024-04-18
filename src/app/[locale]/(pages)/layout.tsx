import { Navbar } from "@/components/navbar";
import { FC } from "react";

const PageLayout: FC<IChildren> = ({ children }) => (
  <>
    <Navbar />
    <div className="pt-20 mx-auto max-w-7xl px-2.5 md:px-6 lg:px-7 relative  overflow-hidden">
      {children}
    </div>
  </>
);

export default PageLayout;
