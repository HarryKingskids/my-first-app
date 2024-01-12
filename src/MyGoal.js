import { StyleSheet, Text, View } from "react-native";
import React from "react";

const MyGoal = () => {
  return (
    <View>
      <Text style={styles.text}>Namaig Khangai gedeg 13 nastai</Text>
      <Text style={styles.text}> Codely Academy-n suragch.</Text>
      <Text style={styles.text}>Minii ahnii appiin sanaa</Text>
      <Text style={styles.text}>bol:</Text>
      <Text style={styles.text}>online ajil olj ogdog application</Text>
      <Text style={styles.text}>jishee ni ta ooriin turshlaga</Text>
      <Text style={styles.text}>ner haana tugsun gazar</Text>
      <Text style={styles.text}>geed huviin medeeleluud</Text>
      <Text style={styles.text}>tegeed ajiliin gazaruud zar tavina</Text>
    </View>
  );
};

export default MyGoal;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    width: "30px",
  },
  text: {
    color: "#000000",
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    fontWeight: "bold",
  },
});
