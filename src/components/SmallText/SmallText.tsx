import React, { ReactNode } from "react";
import { StyleSheet, TextProps as RNTextProps } from "react-native";
import { Text } from "../Text";

interface Props extends RNTextProps {
  children?: ReactNode;
}

export const SmallText = ({ style, children, ...rest }: Props) => {
  return (
    <Text style={[styles.small, style]} {...rest}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  small: {
    fontSize: 11,
  },
});
