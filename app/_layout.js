import { Stack } from "expo-router";
import {
  Button,
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
export default function HomeLayout() {
  return (
    <SafeAreaView style={{ paddingTop: StatusBar.currentHeight, flex: 1 }}>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name="movies/index"
          options={{ title: "Tengicc Kino Theater" }}
        />
        <Stack.Screen name="TicTac/TICTAC" options={{ title: "TicTac" }} />;
        <Stack.Screen name="post/[id]" options={{ title: "Khangai Post" }} />;
        <Stack
          screenOptions={{
            headerShown: false,
          }}
        ></Stack>
      </Stack>
    </SafeAreaView>
  );
}
