import { ComponentType, useCallback, useRef, useState } from "react";
import { FlatList, RefreshControl, SafeAreaView } from "react-native";
import { StyleSheet } from "react-native";

import { variables } from "@/app/styles/variables";

import { Loader } from "../Loader/Loader";

type Props<T> = {
  addStyles?: object;
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
    addStyles,
    list = [],
    isLoading,
    Component,
    refetch,
    withRefresh = true,
    newProps,
  } = props;
  const [isRefreshLoading, setIsRefreshLoading] = useState(false);

  const flatListRef = useRef<FlatList<T> | null>(null);

  const onRefresh = useCallback(async () => {
    if (refetch) {
      try {
        setIsRefreshLoading(true);
        await refetch();
      } finally {
        setIsRefreshLoading(false);
      }
    }
  }, [refetch]);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      <SafeAreaView>
        <FlatList
          ref={flatListRef}
          contentContainerStyle={[styles.list, addStyles && addStyles]}
          data={list}
          showsVerticalScrollIndicator={false}
          renderItem={(item) => <Component {...item.item} {...newProps} />}
          keyExtractor={(item) => item.id}
          refreshControl={
            withRefresh ? (
              <RefreshControl
                refreshing={isRefreshLoading}
                onRefresh={onRefresh}
                colors={[variables.accentColor]}
              />
            ) : undefined
          }
        />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  list: {
    gap: 35,
  },
});
