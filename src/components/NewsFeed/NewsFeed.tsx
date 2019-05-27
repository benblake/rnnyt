import React, { PureComponent } from "react";
import {
  FlatList,
  Modal,
  StyleSheet,
  TouchableOpacity,
  View,
  ViewStyle,
  WebView,
} from "react-native";
import * as globalStyles from "../../style/global";
import { NewsItem, Props as NewsItemProps } from "../NewsItem/NewsItem";
import { SmallText } from "../SmallText/SmallText";

interface Props {
  news: NewsItemProps[];
  listStyle?: ViewStyle;
}

interface State {
  modalVisible: boolean;
  modalUrl: string;
}

export class NewsFeed extends PureComponent<Props, State> {
  public static defaultProps = {
    news: Array(10).fill({
      author: "Shandy B",
      date: new Date(),
      index: 0,
      style: {},
      onPress: () => {},
      title: "Levi the dbag",
      imageUrl:
        "https://avatars1.githubusercontent.com/u/17188936?s=400&u=cfea6044dcd4e480dc8ca09f7c73e1996e116e54&v=4",
      url: "https://www.cbc.ca/",
    }),
  };

  public state: State = {
    modalVisible: false,
    modalUrl: "",
  };

  public render() {
    const { news } = this.props;
    return (
      <View style={globalStyles.COMMON_STYLES.pageContainer}>
        <FlatList<NewsItemProps>
          keyExtractor={(_, index) => index.toString()}
          data={news}
          renderItem={({ item }) => (
            <NewsItem
              style={styles.newsItem}
              {...item}
              onPress={() => this.openModal(item.url)}
            />
          )}
        />
        {this.renderModal()}
      </View>
    );
  }

  private renderModal = () => {
    return (
      <Modal
        animationType="slide"
        visible={this.state.modalVisible}
        onRequestClose={this.closeModal}
      >
        <View style={styles.modalContent}>
          <TouchableOpacity
            onPress={this.closeModal}
            style={styles.closeButton}
          >
            <SmallText>Close</SmallText>
          </TouchableOpacity>
          <WebView
            scalesPageToFit={true}
            source={{ uri: this.state.modalUrl }}
          />
        </View>
      </Modal>
    );
  };

  private openModal = (url: string) => {
    this.setState({
      modalVisible: true,
      modalUrl: url,
    });
  };

  private closeModal = () => {
    this.setState({ modalVisible: false });
  };
}

const styles = StyleSheet.create({
  newsItem: {
    marginBottom: 20,
  },
  modalContent: {
    flex: 1,
    justifyContent: "center",
    paddingTop: 20,
    backgroundColor: globalStyles.BG_COLOR,
  },
  closeButton: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    flexDirection: "row",
  },
});
