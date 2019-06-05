import React from "react";

import { storiesOf } from "@storybook/react-native";
import { Alert, View } from "react-native";
import { NewsFeed } from "../NewsFeed";

storiesOf("NewFeed", module).add("two items", () => (
  <NewsFeed
    news={Array(10).fill({
      author: "Shandy B",
      date: "some date",
      index: 0,
      style: {},
      onPress: () => {
        Alert.alert("onPress", "onPress clicked");
      },
      title: "Levi the dbag",
      imageUrl:
        "https://avatars1.githubusercontent.com/u/17188936?s=400&u=cfea6044dcd4e480dc8ca09f7c73e1996e116e54&v=4",
      url: "https://www.cbc.ca/",
    })}
  />
));
