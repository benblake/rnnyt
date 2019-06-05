import React, { Component } from "react";
import { StyleSheet, TextInput, View } from "react-native";
import * as globalStyles from "../../style/global";
import { NewsFeed } from "../NewsFeed";
import { NewsItemProps } from "../NewsItem";

interface Props {
  filteredNews: NewsItemProps[];
  searchNews: (text: string) => void;
}

interface State {
  searchText: string;
}

export class Search extends Component<Props, State> {
  public state = {
    searchText: "",
  };

  public render() {
    const { searchText } = this.state;

    return (
      <View style={globalStyles.COMMON_STYLES.pageContainer}>
        <View style={styles.search}>
          <TextInput
            style={styles.input}
            onChangeText={this.searchNews}
            value={searchText}
            placeholder="Search"
            placeholderTextColor={globalStyles.MUTED_COLOR}
          />
        </View>
        <NewsFeed news={this.props.filteredNews} />
      </View>
    );
  }

  private searchNews = (text: string) => {
    this.setState({ searchText: text });
    this.props.searchNews(text);
  };
}

const styles = StyleSheet.create({
  input: {
    height: 35,
    color: globalStyles.TEXT_COLOR,
    paddingHorizontal: 5,
    flex: 1,
  },
  search: {
    borderColor: globalStyles.MUTED_COLOR,
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 5,
    borderWidth: 1,
    marginTop: 10,
    marginBottom: 5,
  },
});
