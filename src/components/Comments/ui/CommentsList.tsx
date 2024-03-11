import { PostCommentI } from "@/shared/types/post";
import { Comment, FlatListWithRefresh } from "@/shared/ui";

import { styles } from "./styles";

type Props = {
  list: PostCommentI[];
  isFetching?: boolean;
  isLoading?: boolean;
  refetch?: () => void;
};
export const CommentsList = (props: Props) => {
  const { list, refetch, isLoading } = props;
  return (
    <FlatListWithRefresh
      addStyles={styles.commentsList}
      withRefresh
      list={list}
      isLoading={isLoading}
      refetch={refetch}
      Component={Comment}
    />
  );
};
