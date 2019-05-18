import React, { ReactNode } from "react";

import { storiesOf } from "@storybook/react-native";
import { View, ViewProps } from "react-native";
import { Byline } from "../Byline";

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

storiesOf("Byline", module).add("all types", () => (
  <View style={{ flex: 1, alignItems: "center" }}>
    <Container>
      <Byline date={new Date()} author="Hugh Jass" location="Springfield" />
    </Container>
    <Container style={{ backgroundColor: "#000000" }}>
      <Byline date={new Date()} author="Hugh Jass" location="Springfield" />
    </Container>
  </View>
));
