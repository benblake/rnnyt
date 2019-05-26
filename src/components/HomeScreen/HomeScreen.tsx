import React, { Component } from "react";
import { View } from "react-native";
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
    return (
      <View style={{ flex: 1 }}>
        <View style={{ flex: 1 }} />
        <TabBar selectedTab={this.state.tab} onTabSelected={this.onTabChange} />
      </View>
    );
  }

  private onTabChange = (tab: string) => {
    this.setState({ tab });
  };
}
