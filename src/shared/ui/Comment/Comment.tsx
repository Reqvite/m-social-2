import { View } from "react-native";

import { FIREBASE_AUTH } from "@/app/configs/firebaseConfig";
import { formatDate } from "@/shared/lib/helpers";

import { ProfileCard } from "../ProfileCard/ProfileCard";
import { Text } from "../Text/Text";
import { styles } from "./styles";

type Props = {
  id: string;
  text: string;
  author: string;
  authorId: string;
  authorPhotoUrl?: string;
  authorUrl?: string;
  createdAt: number;
};
export const Comment = (props: Props) => {
  const user = FIREBASE_AUTH.currentUser;
  const { authorId, author, text, authorPhotoUrl, createdAt } = props;

  const isUserComment = authorId === user?.uid;
  return (
    <View style={[styles.commentsBox, isUserComment && styles.isUserComment]}>
      <ProfileCard author={author} photoUrl={authorPhotoUrl} />
      <View style={styles.container}>
        <View style={styles.box}>
          <Text text={text} size="xs" align="left" addStyles={styles.text} />
          <Text
            text={formatDate(createdAt)}
            size="xss"
            align="right"
            addStyles={styles.date}
          />
        </View>
      </View>
    </View>
  );
};
