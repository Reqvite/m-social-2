import { ReactNode } from "react";

import { StoreProvider } from "../StoreProvider/ui/StoreProvider";

type props = {
  children: ReactNode;
};

export const Providers = ({ children }: props) => {
  return <StoreProvider>{children}</StoreProvider>;
};
