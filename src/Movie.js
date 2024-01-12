import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

const Movie = () => {
  return (
    <View style={styles.pic}>
      <Image source={require("../images/Movie.png")} style={styles.image} />
      <Image source={require("../images/ironman.jpg")} style={styles.image} />
      <Image
        source={require("../images/spider-man.jpg")}
        style={styles.image}
      />
      <Image
        source={require("../images/thor_love_and_thunder_dc.jpg")}
        style={styles.image}
      />
    </View>
  );
};

export default Movie;

const styles = StyleSheet.create({
  image: {
    // width: 200,
    display: "flex",
    // height: 300,
    justifyContent: "center",
  },
  pic: {
    // width: 20,
    // height: 20,
    margin: 15,
  },
});
