import AsyncStorage from "@react-native-async-storage/async-storage";
import { configureStore } from "@reduxjs/toolkit";
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from "redux-persist";

import { ExtraArguments, StoreInstance, StorePackage } from "../types";

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
};

class Store implements StorePackage {
  #instance: StoreInstance;

  public get instance(): StoreInstance {
    return this.#instance;
  }
  public get persist() {
    return persistStore(this.#instance);
  }

  public constructor() {
    // const rootReducer = {};
    const persistedReducer = persistReducer(persistConfig, () => {});
    this.#instance = configureStore({
      reducer: persistedReducer,
      middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
          serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
          },
        }),
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
