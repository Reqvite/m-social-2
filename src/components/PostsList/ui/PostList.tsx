import { PostCardI } from "@/shared/types";
import { FlatListWithRefresh, PostCard, Text } from "@/shared/ui";

type Props = {
  withProfile?: boolean;
  withRefresh?: boolean;
  list?: PostCardI[];
  isLoading?: boolean;
  isFetching?: boolean;
  refetch?: () => void;
};

export const PostList = (props: Props) => {
  const {
    withProfile,
    list = [],
    isLoading,
    isFetching,
    refetch,
    withRefresh = true,
  } = props;

  if (list.length === 0 && !isLoading) {
    return <Text text="List is empty" />;
  }

  return (
    <>
      <FlatListWithRefresh
        withRefresh={withRefresh}
        list={list}
        isLoading={isLoading}
        isFetching={isFetching}
        refetch={refetch}
        Component={PostCard}
        newProps={{ withProfile }}
      />
    </>
  );
};
