import React, { ReactNode } from "react";

import { storiesOf } from "@storybook/react-native";
import { View, ViewProps } from "react-native";
import { Text } from "../Text";

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

storiesOf("Text", module).add("all types", () => (
  <View style={{ flex: 1, alignItems: "center" }}>
    <Container>
      <Text>Hello Storybook</Text>
    </Container>
    <Container style={{ backgroundColor: "#000" }}>
      <Text>Hello Storybook</Text>
    </Container>
  </View>
));
