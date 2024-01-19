// profile.js
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Carousel from "react-native-snap-carousel";

const Profile = () => {
  const profileData = {
    profileImage: require("./../assets/Mask Group.png"),
    posts: 6,
    followers: 600,
    following: 300,
    bio: "insta chalai na temon -.- Btw Hi :V\nByeeeeeeeeeee.",
  };

  const data = [
    { image: require("./../assets/Mask Group.png") },
    { image: require("./../assets/Mask Group.png") },
    // Add more images as needed
  ];

  const renderItem = ({ item }) => (
    <View style={styles.slide}>
      <Image source={item.image} style={styles.image} />
    </View>
  );

  return (
    <ScrollView style={styles.container}>
      <Carousel
        data={data}
        renderItem={renderItem}
        sliderWidth={300}
        itemWidth={300}
        loop
      />

      <View style={styles.profileHeader}>
        <Image source={profileData.profileImage} style={styles.profileImage} />
        <View style={styles.profileStats}>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>{profileData.posts}</Text>
            <Text style={styles.statText}>Posts</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>{profileData.followers}</Text>
            <Text style={styles.statText}>Followers</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>{profileData.following}</Text>
            <Text style={styles.statText}>Following</Text>
          </View>
        </View>
      </View>

      <View style={styles.bio}>
        <Text style={styles.bioName}>Md Sazid</Text>
        <Text style={styles.bioDesc}>{profileData.bio}</Text>
      </View>

      <View style={styles.edit}>
        <TouchableOpacity style={styles.editBtn}>
          <Text style={styles.editText}>Edit Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.editBtn}>
          <Text style={styles.editText}>Saved</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.photoGrid}>
        <ScrollView horizontal showsHorizontalScrollIndicator={true}>
          <View style={styles.photoItem} />
          <View style={styles.photoItem} />
          <View style={styles.photoItem} />
        </ScrollView>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
  },
  slide: {
    width: 300,
    height: 300,
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    borderRadius: 8,
  },
  profileHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 16,
  },
  profileImage: {
    width: 107,
    height: 107,
    borderRadius: 107 / 2,
    marginRight: 16,
  },
  profileStats: {
    flexDirection: "row",
    justifyContent: "space-around",
    flex: 1,
  },
  statItem: {
    alignItems: "center",
  },
  statNumber: {
    fontSize: 17,
    fontWeight: "bold",
  },
  statText: {
    fontSize: 14,
    color: "gray",
  },
  bio: {
    marginBottom: 8,
  },
  bioName: {
    fontSize: 20,
    fontWeight: "bold",
  },
  bioDesc: {
    fontSize: 16,
    color: "gray",
  },
  edit: {
    flexDirection: "row",
  },
  editBtn: {
    borderWidth: 1,
    paddingVertical: 8,
    borderRadius: 8,
    flex: 1,
    alignItems: "center",
    marginHorizontal: 5,
  },
  editText: {
    fontSize: 18,
    fontWeight: "400",
  },
  photoGrid: {
    marginTop: 16,
    backgroundColor: "#f0f0f0",
    padding: 8,
    borderRadius: 8,
  },
  photoItem: {
    width: 150,
    height: 150,
    aspectRatio: 1,
    backgroundColor: "lightgray",
    borderRadius: 8,
    marginRight: 8,
  },
});

export default Profile;
