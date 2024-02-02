import React from "react";
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Pressable,
} from "react-native";
import { AntDesign, Feather, MaterialIcons } from "@expo/vector-icons";
import { Link } from "expo-router";
import { useNavigation } from "@react-navigation/native";

const PostDetail = ({ data }) => {
  const navigation = useNavigation();
  const postId = data.id;
  const commentLength = data.comments.length;
  const firstLike = data.likedBy[0];
  const first3Likes = data.likedBy.slice(0, 3);

  const handleProfilePress = () => {
    // Navigate to the profile screen
    navigation.navigate("Profile", { userId: data.userId });
  };

  return (
    <View>
      {/* Profile Picture and Username */}
      <TouchableOpacity onPress={handleProfilePress}>
        <View style={[styles.row, styles.container, { paddingVertical: 5 }]}>
          <Image source={{ uri: data.profileImg }} style={styles.profileImg} />
          <Text style={styles.userId}>{data.userId}</Text>
        </View>
      </TouchableOpacity>

      {/* Link to Other Page */}
      <TouchableOpacity>
        <Link href="/other" asChild>
          <Image
            source={{ uri: data.img }}
            style={{ width: "100%", aspectRatio: 1 }}
          />
        </Link>
      </TouchableOpacity>

      {/* Buttons */}
      <View style={styles.container}>
        <View style={styles.btnsContainer}>
          <View style={styles.btnContainer}>
            {/* Like Button */}
            <TouchableOpacity style={styles.btn}>
              <AntDesign name="hearto" size={24} color="black" />
            </TouchableOpacity>

            {/* Comment Button */}
            <TouchableOpacity style={styles.btn}>
              <AntDesign name="message1" size={24} color="black" />
            </TouchableOpacity>

            {/* Send Button */}
            <TouchableOpacity style={styles.btn}>
              <Feather name="send" size={24} color="black" />
            </TouchableOpacity>
          </View>

          {/* Save Button */}
          <TouchableOpacity style={styles.btn}>
            <MaterialIcons name="save-alt" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Liked By */}
      <View style={styles.row}>
        <View style={styles.row}>
          {/* Display first 3 likes */}
          {first3Likes.map((like, index) => (
            <Image
              key={index}
              source={{ uri: like.profilePic }}
              style={styles.profileImg}
            />
          ))}
        </View>
        {/* Display text for who liked the post */}
        <Text style={styles.likedText}>
          Liked by <Text style={styles.boldText}>{firstLike.userId}</Text>
          {data.likedBy.length > 1 && (
            <Text style={styles.boldText}> and others</Text>
          )}
        </Text>
      </View>

      {/* Post Description */}
      <View style={styles.descContainer}>
        <Text style={styles.userId}>{data.userId}</Text>
        <Text style={styles.desc}>{data.desc}</Text>
      </View>

      {/* View comments Button */}
      {commentLength > 0 && (
        <TouchableOpacity
          onPress={() => navigation.navigate("comments", { postId })}
        >
          <Text style={styles.viewAll}>View all {commentLength} comments</Text>
        </TouchableOpacity>
      )}

      {/* Link to Other Page */}
    </View>
  );
};

const styles = StyleSheet.create({
  viewAll: {
    fontSize: 18,
    color: "gray",
    paddingBottom: 10,
  },
  profileImg: {
    width: 29,
    height: 29,
    borderRadius: 29 / 2,
  },
  boldText: {
    fontWeight: "bold",
  },
  likedText: {
    fontSize: 15,
    fontWeight: "400",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  btnsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  container: {
    paddingHorizontal: 18,
  },
  btnContainer: {
    flexDirection: "row",
    gap: 13,
    paddingVertical: 12,
  },
  btn: {},
  userId: {
    fontSize: 18,
    fontWeight: "bold",
  },
  desc: {
    fontSize: 18,
  },
  descContainer: {
    flexDirection: "row",
    paddingVertical: 10,
  },
});

export default PostDetail;
