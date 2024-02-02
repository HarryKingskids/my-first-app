import {
  Image,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect } from "react";
import { Link, useLocalSearchParams, useNavigation } from "expo-router";
import { postData } from "../../data";
import { AntDesign, MaterialIcons, Feather } from "@expo/vector-icons";
import PostDetail from "./../../components/PostDetail";

const Post = () => {
  const navigation = useNavigation();
  const params = useLocalSearchParams();
  const postId = params.id;
  const data = postData.find((post) => post.id == postId);
  useEffect(() => {
    navigation.setOptions({ headerShown: true, headerBackTitleVisible: false });
  }, [navigation]);

  return (
    <SafeAreaView style={{ paddingTop: StatusBar.currentHeight }}>
      <PostDetail data={data} />
    </SafeAreaView>
  );
};

export default Post;

const styles = StyleSheet.create({
  userId: {
    fontSize: 18,
    fontWeight: "bold",
  },
  desc: {
    fontSize: 18,
  },
  descContainer: {
    flexDirection: "row",
  },
});
