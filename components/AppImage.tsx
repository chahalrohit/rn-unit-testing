import Images from "@assets/images";
import React from "react";
import { Image, ImageResizeMode, ImageStyle, StyleProp } from "react-native";

type Props = {
  sourceKey: keyof typeof Images;
  height?: number;
  width?: number;
  resizeMode?: ImageResizeMode;
  testID?: string;
  accessibilityLabel?: string;
  style?: StyleProp<ImageStyle>;
};

const AppImage: React.FC<Props> = ({
  sourceKey,
  height,
  width,
  resizeMode = "contain",
  testID,
  accessibilityLabel,
  style,
}) => {
  return (
    <Image
      testID={testID}
      source={Images[sourceKey]}
      style={[{ height, width }, style]}
      resizeMode={resizeMode}
      accessibilityLabel={accessibilityLabel}
    />
  );
};

export default AppImage;
