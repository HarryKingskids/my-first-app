import React from "react";
import { StyleSheet, View, Image, Text } from "react-native";

const Movies = ({ imageUrl, header, description }) => {
  return (
    <View style={styles.container}>
      <Image source={imageUrl} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.header}>{header}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 12,
    backgroundColor: "white",
    elevation: 5, // Add elevation for a shadow effect (Android)
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    marginBottom: 20,
  },
  image: {
    width: "100%",
    height: 200,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  textContainer: {
    padding: 10,
  },
  header: {
    fontWeight: "bold",
    fontSize: 18,
    marginBottom: 5,
  },
  description: {
    color: "black",
    fontSize: 14,
  },
});

export default Movies;
