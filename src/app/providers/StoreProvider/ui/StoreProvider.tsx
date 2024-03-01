import { ReactNode } from "react";
import { Provider } from "react-redux";

import { store } from "../config/store";

type Props = {
  children: ReactNode;
};

export const StoreProvider = ({ children }: Props) => {
  return (
    <Provider store={store.instance}>
      {/* <PersistGate
        loading={
          <View style={styles.container}>
            <Loader size="large" />
          </View>
        }
      > */}
      {children}
      {/* </PersistGate> */}
    </Provider>
  );
};

// const styles = StyleSheet.create({
//   container: {
//     backgroundColor: variables.bgPrimary,
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//   },
// });
