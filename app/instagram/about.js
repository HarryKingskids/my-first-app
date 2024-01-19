// about.js
import React from "react";
import { StyleSheet, View, ScrollView, Image } from "react-native";
import Carousel from "react-native-snap-carousel";
import Profile from "../profile"; // Adjust the path if needed

const About = () => {
  const data = [
    { image: require("./../../assets/Mask Group.png") },
    { image: require("./../../assets/Mask Group.png") },
    // Add more images as needed
  ];

  const renderItem = ({ item }) => (
    <View style={styles.slide}>
      <Image source={item.image} style={styles.image} />
    </View>
  );

  return (
    <ScrollView style={styles.container}>
      <Carousel
        data={data}
        renderItem={renderItem}
        sliderWidth={300}
        itemWidth={300}
        loop
      />
      <Profile />
      <View style={styles.imageContainer}>
        <Image
          source={require("./../../assets/Mask Group.png")}
          style={styles.img1}
        />
        <Image
          source={require("./../../assets/Mask Group.png")}
          style={styles.img2}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 16,
  },
  slide: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  imageContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 16,
  },
  img1: {
    width: 150,
    height: 150,
    resizeMode: "cover",
  },
  img2: {
    width: 150,
    height: 150,
    resizeMode: "cover",
  },
});

export default About;
