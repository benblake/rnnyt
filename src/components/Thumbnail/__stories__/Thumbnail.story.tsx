import React from "react";

import { storiesOf } from "@storybook/react-native";
import { View } from "react-native";
import { Thumbnail } from "../Thumbnail";

storiesOf("Byline", module).add("all types", () => (
  <View style={{ flex: 1, alignItems: "center" }}>
    <Thumbnail url="https://avatars1.githubusercontent.com/u/17188936?s=400&u=cfea6044dcd4e480dc8ca09f7c73e1996e116e54&v=4" />
    <Thumbnail
      url="https://avatars1.githubusercontent.com/u/17188936?s=400&u=cfea6044dcd4e480dc8ca09f7c73e1996e116e54&v=4"
      titleText="Levi Baggins"
    />
    <Thumbnail
      url="https://avatars1.githubusercontent.com/u/17188936?s=400&u=cfea6044dcd4e480dc8ca09f7c73e1996e116e54&v=4"
      titleText="Levi Baggins"
      accentColor="#ff0000"
    />
    <Thumbnail url="" accentColor="#ff0000" />
  </View>
));
