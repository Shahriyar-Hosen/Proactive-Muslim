import { FC } from "react";

const AuthLayout: FC<IChildren> = ({ children }) => (
  <div className="h-full flex items-center justify-center min-h-screen">
    {children}
  </div>
);

export default AuthLayout;
