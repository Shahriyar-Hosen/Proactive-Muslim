import { FC, PropsWithChildren } from "react";

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return <main className="auth">{children}</main>;
};

export default Layout;
