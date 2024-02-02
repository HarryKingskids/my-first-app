import React, { forwardRef } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import StoryItem from "./StoryItem";
import { useNavigation } from "expo-router";
import { chats } from "../data";

const DmItem = forwardRef(({ data }, ref) => {
  // const navigation = useNavigation();
  // const datas = chats.find((chats) => chats.id == chatsId);
  // const comments = datas.comments;
  return (
    <TouchableOpacity
      style={styles.container}
      ref={ref}
      // onPress={() => navigation.navigate("comments", { chatsid })}
    >
      <StoryItem data={{ img: data.img }} />
      <View>
        <Text style={styles.userId}>{data.userId}</Text>
        <View style={styles.row}>
          <Text style={styles.text}>{data.lastMsg.text}</Text>
          <Text style={styles.date}>{data.lastMsg.date}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
});

export default DmItem;

const styles = StyleSheet.create({
  date: {
    fontSize: 20,
    color: "gray",
  },
  text: {
    fontSize: 23,
  },
  userId: {
    fontSize: 23,
    fontWeight: "500",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
  },
});
