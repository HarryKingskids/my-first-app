import React from "react";
import { StyleSheet, View, Image, ScrollView, Text } from "react-native";

const Movie = ({ imageUrl, header, description }) => {
  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.pic}>
        <Image source={imageUrl} style={styles.image} />
        <Text source={header} style={styles.garchig}>
          {header}
        </Text>
        <Text source={description}>{description}</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    borderRadius: 12,
  },
  image: {
    width: 200,
    height: 300,
    margin: 5,
  },
  pic: {
    flexDirection: "column",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  garchig: {
    fontWeight: "bold",
    fontSize: 20,
  },
  desc: {
    color: "black",
    fontSize: 15,
  },
});

export default Movie;
