import { useState } from "react";
import { View } from "react-native";

import { useCreatePostCommentMutation } from "@/redux/posts/posts";
import { PostCommentI } from "@/shared/types/post";
import { Input } from "@/shared/ui";

import { CommentsList } from "./CommentsList";
import { styles } from "./styles";

type Props = {
  id: string;
  photoUrl: string;
  list: PostCommentI[];
  isFetching?: boolean;
  isLoading?: boolean;
  refetch?: () => void;
};

export const Comments = (props: Props) => {
  const { id, list, isFetching, refetch, isLoading: isLoadingList } = props;
  const [text, setText] = useState("");
  const [createComment, { isLoading }] = useCreatePostCommentMutation();

  return (
    <>
      <CommentsList
        list={list}
        isFetching={isFetching}
        refetch={refetch}
        isLoading={isLoadingList}
      />
      <View style={styles.box}>
        <Input
          addStyles={styles.input}
          isLoading={isLoading}
          value={text}
          onChangeText={(text) => setText(text)}
          variant="withButton"
          placeholder="Write your comment"
          onPress={() => createComment({ body: { text, postId: id } })}
        />
      </View>
    </>
  );
};
