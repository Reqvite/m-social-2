/// <reference types="nativewind/types" />

import { AppRootParamList } from "../Routes/types";

declare global {
  namespace ReactNavigation {
    interface RootParamList extends AppRootParamList {}
  }
}
