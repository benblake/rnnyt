import React, { Component } from "react";
import { Text, View } from "react-native";
import { NewsFeed } from "../NewsFeed/NewsFeed";
import { TabBar } from "./components";

interface State {
  tab: string;
}

export const tabs = ["featured", "search", "bookmarks"];

export class HomeScreen extends Component<{}, State> {
  public state = {
    tab: tabs[0],
  };

  public render() {
    const { tab } = this.state;

    return (
      <View style={{ flex: 1 }}>
        <View style={{ flex: 1 }}>{this.renderScreen()}</View>
        <TabBar selectedTab={tab} onTabSelected={this.onTabChange} />
      </View>
    );
  }

  private renderScreen = () => {
    const { tab } = this.state;

    switch (tab) {
      case tabs[0]:
        return <NewsFeed />;
      case tabs[1]:
        return <Text>Search</Text>;
      case tabs[2]:
        return <Text>Bookmarks</Text>;
      default:
        return null;
    }
  };

  private onTabChange = (tab: string) => {
    this.setState({ tab });
  };
}
