import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import PostDetail from "./../components/PostDetail";
import { postData } from "../data";

const HomeScreen = ({ navigation }) => {
  return (
    <ScrollView style={{ flex: 1 }}>
      {postData.map((data) => (
        <PostDetail data={data} navigation={navigation} key={data.id} />
      ))}
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
