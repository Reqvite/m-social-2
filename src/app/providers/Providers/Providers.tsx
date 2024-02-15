import { ReactNode } from "react";

type props = {
  children: ReactNode;
};

export const Providers = ({ children }: props) => {
  return <>{children}</>;
};
