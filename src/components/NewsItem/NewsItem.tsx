import React, { PureComponent } from "react";
import { StyleSheet, TouchableOpacity, View, ViewStyle } from "react-native";
import * as globalStyles from "../../style/global";
import { Byline } from "../Byline/Byline";
import { SmallText } from "../SmallText/SmallText";
import { Thumbnail } from "../Thumbnail/Thumbnail";

interface Props {
  author: string;
  date: Date;
  index: number;
  onPress: () => void;
  title: string;
  description?: string;
  imageUrl?: string;
  location?: string;
  style: ViewStyle;
}

export class NewsItem extends PureComponent<Props, never> {
  public render() {
    const {
      style,
      imageUrl,
      title,
      author,
      date,
      location,
      description,
    } = this.props;

    const accentColor =
      globalStyles.ACCENT_COLORS[
        this.props.index % globalStyles.ACCENT_COLORS.length
      ];

    return (
      <TouchableOpacity style={style}>
        <View>
          <Thumbnail
            url={imageUrl || ""}
            titleText={title}
            accentColor={accentColor}
            style={styles.thumbnail}
          />
          <View style={styles.content}>
            <Byline author={author} date={date} location={location} />
            <SmallText>{description}</SmallText>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  thumbnail: {
    marginBottom: 5,
  },
  content: {
    paddingHorizontal: 5,
  },
});
