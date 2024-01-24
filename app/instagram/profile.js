import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import About from "../home/about";
import Posts from "../home/posts";
const proImg = require("../../assets/Mask Group.png");
const Profile = () => {
  const about = {
    name: "Khangai",
    bio1: "Код сурж байгаа 14 настайs",
    bio2: "Kings kids school",
    followers: "100000000000000M",
    following: 100,
    postNum: 5,
  };
  const postData = [
    {
      id: 1,
      desc: "My first post 1",
      img: "https://images.unsplash.com/photo-1519638399535-1b036603ac77?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 2,
      desc: "My first post 2",
      img: "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 3,
      desc: "My first post 3",
      img: "https://images.unsplash.com/photo-1600758208050-a22f17dc5bb9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <About
        img={proImg}
        name={about.name}
        bio1={about.bio1}
        bio2={about.bio2}
        followers={about.followers}
        following={about.following}
        postNum={about.postNum}
      />
      {/* Үндсэн пост хэсэг */}
      <Posts data={postData} />
    </ScrollView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    padding: 8,
    flex: 1,
  },
});
