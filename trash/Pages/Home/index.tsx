import { Link } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

const HomeScreen = () => {
  return (
    <View>
      <Text>HomeScreen</Text>
      <Link href={"/"}>Kembali</Link>
    </View>
  );
};

export default HomeScreen;
