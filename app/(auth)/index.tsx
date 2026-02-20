import React, { useEffect } from "react";
import { View, Text, Image } from "react-native";
import { SplashLogo } from "@/assets/temu-images";
import { styles } from "./styles/stylesSplashScreen";
import { router } from "expo-router";

const SplashScreen = () => {
  useEffect(() => {
    const timer = setTimeout(() => {
      // Navigasi ke halaman berikutnya setelah 3 detik
      router.replace("/(auth)/login");
    }, 3000);

    return () => clearTimeout(timer);
  });
  return (
    <View style={styles.screen}>
      <Image source={SplashLogo} style={{ width: 200, height: 200 }} />
    </View>
  );
};

export default SplashScreen;
