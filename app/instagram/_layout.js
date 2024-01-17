import { Tabs } from "expo-router/tabs";
import { AntDesign } from "@expo/vector-icons";

export default function HomeLayout() {
  return (
    <Tabs screenOptions={{ headerShown: true }}>
      <Tabs.Screen
        name="about"
        options={{
          title: "Нүүр хуудас",
          tabBarIcon: () => <AntDesign name="home" size={24} color="black" />,
        }}
      />
      <Tabs.Screen
        name="profile"
        optsions={{
          title: "Профайл",
          tabBarIcon: () => <AntDesign name="user" size={24} color="black" />,
        }}
      />
    </Tabs>
  );
}
