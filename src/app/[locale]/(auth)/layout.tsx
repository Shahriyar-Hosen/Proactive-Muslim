import { FC, PropsWithChildren } from "react";

const Layout: FC<PropsWithChildren> = ({ children }) => (
  <main className="flex justify-center items-center min-h-screen">
    {children}
  </main>
);

export default Layout;
