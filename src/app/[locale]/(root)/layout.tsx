import { Navbar } from "@/components/navbar";
import { FC } from "react";

const PageLayout: FC<IChildren> = ({ children }) => (
  <>
    <Navbar />
    <div className="pt-20 mx-auto max-w-7xl px-2 md:px-6 lg:px-8">
      {children}
    </div>
  </>
);

export default PageLayout;
