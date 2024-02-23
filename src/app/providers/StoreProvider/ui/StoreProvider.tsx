import { ReactNode } from "react";
import { StyleSheet, View } from "react-native";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import { variables } from "@/app/styles/variables";
import { Loader } from "@/shared/ui";

import { store } from "../config/store";

type Props = {
  children: ReactNode;
};

export const StoreProvider = ({ children }: Props) => {
  return (
    <Provider store={store.instance}>
      <PersistGate
        loading={
          <View style={styles.container}>
            <Loader size="large" />
          </View>
        }
        persistor={store.persist}
      >
        {children}
      </PersistGate>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: variables.bgPrimary,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
