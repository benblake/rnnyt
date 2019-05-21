import React, { PureComponent } from "react";

import { FlatList, StyleSheet, View, ViewStyle } from "react-native";
import * as globalStyles from "../../style/global";
import { NewsItem, Props as NewsItemProps } from "../NewsItem/NewsItem";

interface Props {
  news: NewsItemProps[];
  listStyle?: ViewStyle;
}

export class NewsFeed extends PureComponent<Props, never> {
  public render() {
    const { news } = this.props;
    return (
      <View style={globalStyles.COMMON_STYLES.pageContainer}>
        <FlatList<NewsItemProps>
          data={news}
          renderItem={({ item }) => (
            <NewsItem style={styles.newsItem} {...item} />
          )}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  newsItem: {
    marginBottom: 20,
  },
});
