import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Link } from "expo-router";

const Home = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home Page</Text>

      <Link href="/movies" asChild>
        <TouchableOpacity style={styles.linkButton}>
          <Text style={styles.linkText}>Tengicc Kino Theater</Text>
        </TouchableOpacity>
      </Link>

      <Link href="/TicTac/TICTAC" asChild>
        <TouchableOpacity style={styles.linkButton}>
          <Text style={styles.linkText}>TicTac togloom</Text>
        </TouchableOpacity>
      </Link>
      <Link href="instagram/about" asChild>
        <TouchableOpacity style={styles.linkButton}>
          <Text style={styles.linkText}>Instagram</Text>
        </TouchableOpacity>
      </Link>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  linkButton: {
    backgroundColor: "red",
    width: 200,
    height: 59,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10,
  },
  linkText: {
    color: "white",
    fontSize: 16,
  },
});

export default Home;
