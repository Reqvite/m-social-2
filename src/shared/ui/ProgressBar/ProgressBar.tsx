import { View } from "react-native";
import { Bar, BarPropTypes } from "react-native-progress";

import { variables } from "@/app/styles/variables";

type Props = BarPropTypes & {
  addStyles?: object;
};

export const ProgressBar = (props: Props) => {
  const { addStyles, ...otherProps } = props;
  return (
    <View style={addStyles && addStyles}>
      <Bar width={null} color={variables.accentColor} {...otherProps} />
    </View>
  );
};
