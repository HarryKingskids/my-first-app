import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
const profileimg = require("../../images/152762167_1135929170219535_8906352925532258690_o 1.png");
const Profile = () => {
  return (
    <View>
      <Image source={profileimg} style={styles.Image} />
      <Text style={styles.Text}>TSET</Text>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  Text: {
    fontWeight: "bold",
    display: "flex",
    justifyContent: "flex-end",
    alignContent: "center",
  },
  Image: {
    height: 100,
    width: 100,
    borderRadius: 50,
  },
});
