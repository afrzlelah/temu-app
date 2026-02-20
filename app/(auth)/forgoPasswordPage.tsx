import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { COLOR } from "@/Style/COLOR";
import { Image } from "expo-image";
import {
  BenderaIndonesia,
  imageForgortPassword,
  SplashLogo,
} from "@/assets/temu-images";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";

const forgoPasswordPage = () => {
  return (
    <View style={styles.container}>
      <View style={styles.topestViewContainer}>
        <FontAwesome5 name="arrow-left" size={24} color={COLOR.primary} />
        <Image source={BenderaIndonesia} style={{ width: 30, height: 30 }} />
      </View>
      <View style={styles.verificationContainer}>
        <Text style={styles.verificationText}>Verifivation</Text>
        <Text style={styles.enterCodeText}>Enter The Code to Continue </Text>
      </View>
      <View style={styles.imageContainer}>
        <Image
          source={imageForgortPassword}
          style={{ width: 250, height: 250 }}
        />
      </View>
      <View style={styles.otpTextContainer}>
        <Text style={styles.otpTitle}>OTP Verification</Text>
        <Text style={styles.otpDescription}>
          Verify your Gmail to secure your account. Check your inbox for the
          verification code.
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#dcdcdc",
    flex: 1,
  },
  topestViewContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
  },
  verificationContainer: {
    // backgroundColor: "#000",
    height: 100,
    justifyContent: "center",
    paddingLeft: 30,
  },
  verificationText: {
    fontSize: 30,
    fontWeight: "900",
    color: COLOR.primary,
    lineHeight: 30,
  },
  enterCodeText: {
    fontSize: 11,
    fontWeight: "900",
    color: "black",
    paddingLeft: 7,
  },
  imageContainer: {
    // backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
    height: 300,
  },
});
export default forgoPasswordPage;
