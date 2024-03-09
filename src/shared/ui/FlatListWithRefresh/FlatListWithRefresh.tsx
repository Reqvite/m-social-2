import { ComponentType, useCallback } from "react";
import { FlatList, RefreshControl, SafeAreaView } from "react-native";
import { StyleSheet } from "react-native";

import { variables } from "@/app/styles/variables";

import { Loader } from "../Loader/Loader";

type Props<T> = {
  list?: T[];
  isLoading?: boolean;
  isFetching?: boolean;
  Component: ComponentType<T>;
  refetch?: () => void;
  newProps?: object;
  withRefresh?: boolean;
};

export const FlatListWithRefresh = <T extends { id: string }>(
  props: Props<T>,
) => {
  const {
    list = [],
    isLoading,
    isFetching,
    Component,
    refetch,
    withRefresh = true,
    newProps,
  } = props;

  const onRefresh = useCallback(() => {
    if (refetch) {
      refetch();
    }
  }, [refetch]);

  if (isLoading) {
    return <Loader />;
  }

  const isRefresh = !!(!isLoading && isFetching);
  return (
    <SafeAreaView>
      <FlatList
        contentContainerStyle={styles.list}
        data={list}
        showsVerticalScrollIndicator={false}
        renderItem={(item) => <Component {...item.item} {...newProps} />}
        keyExtractor={(item) => item.id}
        refreshControl={
          withRefresh ? (
            <RefreshControl
              refreshing={isRefresh}
              onRefresh={onRefresh}
              colors={[variables.accentColor]}
            />
          ) : undefined
        }
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  list: {
    gap: 35,
  },
});
