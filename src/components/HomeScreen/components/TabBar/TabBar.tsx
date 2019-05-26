import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import * as globalStyles from "../../../../style/global";
import { SmallText } from "../../../SmallText";
import { tabs } from "../../HomeScreen";
import { Icon } from "./components";

interface Props {
  selectedTab: string;
  onTabSelected?: (tab: string) => void;
}

export class TabBar extends Component<Props, never> {
  public render() {
    const { selectedTab, onTabSelected } = this.props;

    return (
      <View
        style={{
          height: 54,
          backgroundColor: "#777777",
          flexDirection: "row",
        }}
      >
        <TouchableOpacity
          style={styles.tabButton}
          activeOpacity={0.5}
          onPress={() => onTabSelected && onTabSelected(tabs[0])}
        >
          <Icon
            icon={selectedTab === tabs[0] ? "star-filled" : "star-outline"}
            scale={1.3}
          />
          <SmallText style={{ color: "#ffffff" }}>Featured</SmallText>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.tabButton}
          activeOpacity={0.5}
          onPress={() => onTabSelected && onTabSelected(tabs[1])}
        >
          <Icon
            icon={selectedTab === tabs[1] ? "search-filled" : "search-outline"}
            scale={1.3}
          />
          <SmallText style={{ color: "#ffffff" }}>Search</SmallText>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.tabButton}
          activeOpacity={0.5}
          onPress={() => onTabSelected && onTabSelected(tabs[2])}
        >
          <Icon
            icon={
              selectedTab === tabs[2] ? "bookmark-filled" : "bookmark-outline"
            }
            scale={1.3}
          />
          <SmallText style={{ color: "#ffffff" }}>Bookmarks</SmallText>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  tabButton: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: globalStyles.BAR_COLOR,
  },
});
