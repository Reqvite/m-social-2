import { ActivityIndicator, ActivityIndicatorProps } from "react-native";

import { variables } from "@/app/styles/variables";

type Props = ActivityIndicatorProps & {
  color?: string;
};

export const Loader = (props: Props) => {
  const {
    color = variables.accentColor,
    size = "small",
    ...otherProps
  } = props;
  return <ActivityIndicator size={size} color={color} {...otherProps} />;
};
