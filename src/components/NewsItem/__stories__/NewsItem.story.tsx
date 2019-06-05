import React from "react";

import { storiesOf } from "@storybook/react-native";
import { Alert, View } from "react-native";
import { NewsItem } from "../NewsItem";

storiesOf("NewsItem", module).add("all types", () => (
  <View style={{ flex: 1, alignItems: "center" }}>
    <NewsItem
      author="Shandy B"
      date="some date"
      index={0}
      onPress={() => {
        Alert.alert("onPress", "onPress clicked");
      }}
      style={{}}
      title="Levi the dbag"
      imageUrl="https://avatars1.githubusercontent.com/u/17188936?s=400&u=cfea6044dcd4e480dc8ca09f7c73e1996e116e54&v=4"
    />
    <NewsItem
      author="Shandy B"
      date="some date"
      index={0}
      onPress={() => {
        Alert.alert("onPress", "onPress clicked");
      }}
      style={{}}
      title="Levi the dbag"
      description="This is Levi, he is a good dog, but somtimes a total idiot"
      imageUrl="https://avatars1.githubusercontent.com/u/17188936?s=400&u=cfea6044dcd4e480dc8ca09f7c73e1996e116e54&v=4"
    />
  </View>
));
