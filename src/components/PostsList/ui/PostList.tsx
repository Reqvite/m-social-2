import { PostCardI } from "@/shared/types";
import { FlatListWithRefresh, PostCard } from "@/shared/ui";

type Props = {
  withProfile?: boolean;
  list?: PostCardI[];
  isLoading?: boolean;
  isFetching?: boolean;
  refetch: () => void;
};

export const PostList = (props: Props) => {
  const {
    withProfile = true,
    list = [],
    isLoading,
    isFetching,
    refetch,
  } = props;

  return (
    <FlatListWithRefresh
      list={list}
      isLoading={isLoading}
      isFetching={isFetching}
      refetch={refetch}
      Component={PostCard}
      newProps={{ withProfile }}
    />
  );
};
