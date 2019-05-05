import React, { ReactNode } from "react";

import { storiesOf } from "@storybook/react-native";
import { View, ViewProps } from "react-native";
import { SmallText } from "../SmallText";

interface Props extends ViewProps {
  children?: ReactNode;
}
const Container = ({ children, style, ...rest }: Props) => {
  return (
    <View style={[{ padding: 20 }, style]} {...rest}>
      {children}
    </View>
  );
};

storiesOf("SmallText", module).add("all types", () => (
  <View style={{ flex: 1, alignItems: "center" }}>
    <Container>
      <SmallText>Hello Storybook</SmallText>
    </Container>
    <Container style={{ backgroundColor: "#000" }}>
      <SmallText>Hello Storybook</SmallText>
    </Container>
  </View>
));
