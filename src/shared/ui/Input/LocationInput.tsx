import { Entypo } from "@expo/vector-icons";

import { variables } from "@/app/styles/variables";

import { Button } from "../Button/Button";
import { Loader } from "../Loader/Loader";
import { Input, InputBaseProps } from "./Input";
import { useLocationInput } from "./model/useLocationInput";
import { locationInputStyles } from "./styles";

type Props = InputBaseProps & {
  setValue: (location: string) => void;
};

export const LocationInput = (props: Props) => {
  const { setValue, ...otherProps } = props;
  const { isLoading, getLocation } = useLocationInput(setValue);

  return (
    <Input
      leftAddon={
        <Entypo name="location-pin" size={24} color={variables.primaryColor} />
      }
      rightAddon={
        isLoading ? (
          <Loader />
        ) : (
          <Button
            onPress={getLocation}
            variant="clear"
            text="My location"
            addStyles={locationInputStyles.locationButton}
          />
        )
      }
      {...otherProps}
    />
  );
};
