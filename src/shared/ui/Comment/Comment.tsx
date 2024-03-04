import { Image } from "expo-image";
import { View } from "react-native";

import { BLUR_HASH, IMAGE_TRANSITION } from "@/shared/const";
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
          placeholder={BLUR_HASH}
          style={styles.img}
          contentFit="cover"
          transition={IMAGE_TRANSITION}
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
