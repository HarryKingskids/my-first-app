import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { useNavigation } from "expo-router";

const NavigationToProfile = ({ username }) => {
  const navigation = useNavigation();

  const handleNavigationToProfile = () => {
    navigation.navigate("UserProfileListScreen", { username });
  };

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={handleNavigationToProfile}
    >
      <Text style={styles.text}>View {username}'s Profile</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f0f0f0",
    paddingVertical: 20,
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    color: "blue",
  },
});

export default NavigationToProfile;
