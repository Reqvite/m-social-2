import { configureStore, ReducersMapObject } from "@reduxjs/toolkit";
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from "redux-persist";

import { rtkApi } from "@/shared/api/rtkApi";

import {
  ExtraArguments,
  RootReducer,
  StoreInstance,
  StorePackage,
} from "../types";

// const persistConfig = {
//   key: "root",
//   storage: AsyncStorage,
// };

class Store implements StorePackage {
  #instance: StoreInstance;

  public get instance(): StoreInstance {
    return this.#instance;
  }
  public get persist() {
    return persistStore(this.#instance);
  }

  public constructor() {
    const rootReducer: ReducersMapObject<RootReducer> = {
      [rtkApi.reducerPath]: rtkApi.reducer,
    };
    // const persistedReducer = persistReducer(persistConfig, rootReducer);
    this.#instance = configureStore({
      reducer: rootReducer,
      middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
          serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
          },
        }).concat(rtkApi.middleware),
    });
  }

  public get extraArguments(): ExtraArguments {
    return {
      //   $api,
      //   storageApi,
      //   notificationApi,
    };
  }
}

export { Store };
