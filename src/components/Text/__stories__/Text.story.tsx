import React from "react";

import { storiesOf } from "@storybook/react-native";
import { Text } from "../Text";

storiesOf("Text", module).add("default view", () => (
  <Text>Hello Storybook</Text>
));
