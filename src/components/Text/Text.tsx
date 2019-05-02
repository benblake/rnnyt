import React from "react-native";
import {Text as RNText, TextProps as RNTextProps} from "react-native"
import { ReactNode } from "react";
import * as globalStyles from "../../style/global";

interface Props extends RNTextProps {
  children?: ReactNode;
}

export const Text = ({children, style, ...rest}: Props) => {
  return (
    <RNText style={[globalStyles.COMMON_STYLES.text, style]} {...rest}>
      {children}
    </RNText>
  );
}