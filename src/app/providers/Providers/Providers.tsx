import { ReactNode } from "react";

import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";
import { StoreProvider } from "../StoreProvider/ui/StoreProvider";

type props = {
  children: ReactNode;
};

export const Providers = ({ children }: props) => {
  return (
    <StoreProvider>
      <ErrorBoundary>{children}</ErrorBoundary>
    </StoreProvider>
  );
};
