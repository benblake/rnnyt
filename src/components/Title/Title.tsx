import React, { ReactNode } from "react";
import { StyleSheet, TextProps as RNTextProps } from "react-native";
import * as globalStyles from "../../style/global";
import { Text } from "../Text";

interface Props extends RNTextProps {
  children?: ReactNode;
}

export const Title = ({ style, children }: Props) => {
  return <Text style={[styles.title, style]}>{children}</Text>;
};

const styles = StyleSheet.create({
  title: {
    fontFamily: "HelveticaNeue-CondensedBold",
    fontSize: 18,
    color: globalStyles.HEADER_TEXT_COLOR,
    backgroundColor: `${globalStyles.BG_COLOR}99`,
  },
});
