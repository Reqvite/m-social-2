import {
  type configureStore,
  type ThunkMiddleware,
  type Tuple,
  type UnknownAction,
} from "@reduxjs/toolkit";

import { type reducer as uiReducer } from "@/redux/ui/slice";
import { rtkApi } from "@/shared/api/rtkApi";

type RootReducer = {
  ui: ReturnType<typeof uiReducer>;
  [rtkApi.reducerPath]: ReturnType<typeof rtkApi.reducer>;

  //   posts: ReturnType<typeof threadReducer>;
};

type ExtraArguments = {
  //   authApi: typeof authApi;
  //   commentApi: typeof commentApi;
  //   imageApi: typeof imageApi;
  //   notificationApi: typeof notificationApi;
  //   postApi: typeof postApi;
  //   storageApi: typeof storageApi;
};

type StoreInstance = ReturnType<
  typeof configureStore<
    RootReducer,
    UnknownAction,
    Tuple<[ThunkMiddleware<RootReducer, UnknownAction, ExtraArguments>]>
  >
>;

type StorePackage = {
  extraArguments: ExtraArguments;
};

export {
  type ExtraArguments,
  type RootReducer,
  type StoreInstance,
  type StorePackage,
};
