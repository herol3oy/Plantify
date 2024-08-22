import { theme } from "@/theme";
import Entypo from "@expo/vector-icons/Entypo";
import Feather from "@expo/vector-icons/Feather";
import { Redirect, Tabs } from "expo-router";
import { Text } from "react-native";

const hasFinishedOnboarding = true;

export default function Layout() {
  if (!hasFinishedOnboarding) {
    return <Redirect href="/onboarding" />;
  }
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: theme.colorGreen }}>
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarShowLabel: true,
          tabBarLabel() {
            return <Text>Home</Text>;
          },
          tabBarIcon: ({ size, color }) => (
            <Entypo name="leaf" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarShowLabel: true,
          tabBarLabel() {
            return <Text>Profile</Text>;
          },
          tabBarIcon: ({ size, color }) => (
            <Feather name="user" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
