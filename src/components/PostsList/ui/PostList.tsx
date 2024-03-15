import { PostCardI } from "@/shared/types";
import { FlatListWithRefresh, PostCard } from "@/shared/ui";

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
