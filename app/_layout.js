import { Stack } from "expo-router";

export default function HomeLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="movies/index"
        options={{ title: "Tengicc Kino Theater" }}
      />
      ;
      <Stack.Screen name="TicTac/TICTAC" options={{ title: "TicTac" }} />;
      <Stack.Screen name="index" options={{ title: "Home Page" }} />;
    </Stack>
  );
}
