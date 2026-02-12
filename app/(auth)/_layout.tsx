import { View, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

const LayoutAuth = () => {
  return (
    <>
      <StatusBar style="inverted" />
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="login" />
      </Stack>
    </>
  );
};

export default LayoutAuth;
