import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Home from "./../home/index";
import { postData, stories } from "../../data";
import PostDetail from "../../components/PostDetail";
import { ScrollView } from "react-native-gesture-handler";
const FYP = () => {
  const list = postData;
  return (
    <ScrollView>
      <Text></Text>
      <Home />
      {list.map((data) => (
        <PostDetail data={data} />
      ))}
    </ScrollView>
  );
};

export default FYP;

const styles = StyleSheet.create({});
