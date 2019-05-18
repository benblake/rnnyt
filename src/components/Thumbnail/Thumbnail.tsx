import React from "react";
import { ImageBackground, StyleSheet, View, ViewStyle } from "react-native";
import { Title } from "../Title";

interface Props {
  url: string;
  accentColor?: string;
  style?: ViewStyle;
  titleText?: string;
}

export const Thumbnail = ({ url, accentColor, style, titleText }: Props) => {
  const imageStyle = {
    backgroundColor: `${accentColor}77`,
  };

  const TitleComponent = <Title style={styles.title}>{titleText}</Title>;

  return (
    <View style={[styles.container, { borderColor: accentColor }, style]}>
      {url.length > 0 ? (
        <ImageBackground style={styles.image} source={{ uri: url }}>
          {TitleComponent}
        </ImageBackground>
      ) : (
        <View style={[styles.image, imageStyle]}>{TitleComponent}</View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 3,
    borderStyle: "solid",
  },
  image: {
    height: 100,
    justifyContent: "flex-end",
  },
  title: {
    padding: 5,
  },
});
