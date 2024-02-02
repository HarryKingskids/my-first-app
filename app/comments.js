import { Image, StyleSheet, Text, View } from "react-native";
import { Link, router, useLocalSearchParams, useNavigation } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { postData } from "../data";
import { useEffect } from "react";
export default function Modal() {
  // If the page was reloaded or navigated to directly, then the modal should be presented as
  // a full screen page. You may need to change the UI to account for this.

  // navigation буюу хуудас өөрчлөгдөх бүрт доторхи кодыг ажиллуулна
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerBackTitleVisible: false,
      title: "Comments",
    });
  }, [navigation]);

  const isPresented = router.canGoBack();

  const params = useLocalSearchParams();
  const postId = params.postId;
  console.log("params", params);
  // post data
  const data = postData.find((post) => post.id == postId);
  const comments = data.comments;
  return (
    <View style={styles.container}>
      {/* Use `../` as a simple way to navigate to the root. This is not analogous to "goBack". */}
      {!isPresented && <Link href="../">Dismiss</Link>}
      {/* Native modals have dark backgrounds on iOS, set the status bar to light content. */}
      <StatusBar style="light" />

      <View style={styles.commentContainer}>
        {comments.map((comment) => (
          <View style={styles.row}>
            <Image source={{ uri: comment.img }} style={styles.profileImg} />
            <View>
              <Text style={styles.userId}>{comment.userId}</Text>
              <Text style={styles.desc}>{comment.comment}</Text>
            </View>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  commentContainer: {
    padding: 16,
    gap: 8,
  },
  profileImg: { width: 29, height: 29, borderRadius: 29 / 2 },
  userId: {
    fontSize: 18,
    fontWeight: "bold",
  },
  desc: {
    fontSize: 18,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
});
