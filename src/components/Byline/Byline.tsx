import React from "react";
import { StyleSheet, View } from "react-native";
import * as globalStyles from "../../style/global";
import { SmallText } from "../SmallText/SmallText";

interface Props {
  date: string;
  author: string;
  location?: string;
}

export const Byline = ({ date, author, location }: Props) => {
  return (
    <View>
      <View style={styles.row}>
        <SmallText>{date}</SmallText>
        <SmallText>{author}</SmallText>
      </View>

      {!!location && (
        <View style={styles.row}>
          <SmallText style={styles.location}>{location}</SmallText>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 5,
  },
  location: {
    color: globalStyles.MUTED_COLOR,
  },
});
