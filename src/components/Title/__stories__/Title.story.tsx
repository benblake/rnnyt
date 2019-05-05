import React, { ReactNode } from "react";

import { storiesOf } from "@storybook/react-native";
import { View, ViewProps } from "react-native";
import { Title } from "../Title";

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

storiesOf("Title", module).add("all types", () => (
  <View style={{ flex: 1, alignItems: "center" }}>
    <Container>
      <Title>Hello Storybook</Title>
    </Container>
    <Container style={{ backgroundColor: "#000" }}>
      <Title>Hello Storybook</Title>
    </Container>
  </View>
));
