import { Image, View } from "react-native";

import { formatDate } from "@/shared/lib/helpers";

import { Text } from "../Text/Text";
import { styles } from "./styles";

type Props = {
  text: string;
  date: string;
  authorPhotoUrl?: string;
  authorUrl?: string;
};
export const Comment = (props: Props) => {
  const { text, date, authorPhotoUrl } = props;
  return (
    <View style={styles.container}>
      {authorPhotoUrl && (
        <Image
          source={{
            uri: authorPhotoUrl,
          }}
          style={styles.img}
          resizeMode="cover"
        />
      )}
      <View style={styles.box}>
        <Text text={text} size="xs" align="left" addStyles={styles.text} />
        <Text
          text={formatDate(date)}
          size="xs"
          align="right"
          addStyles={styles.date}
        />
      </View>
    </View>
  );
};
