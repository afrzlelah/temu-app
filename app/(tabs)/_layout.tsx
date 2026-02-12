import { View, Text } from "react-native";
import React from "react";
import { Stack, Tabs } from "expo-router";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen
        name={"home"}
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <FontAwesome5 size={28} name="home" color={color} />
          ),
        }}
      />
      <Tabs.Screen name={"about"} options={{ title: "About" }} />
    </Tabs>
  );
}
