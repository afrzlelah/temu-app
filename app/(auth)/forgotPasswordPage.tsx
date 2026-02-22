import { View, Text, StyleSheet, TextInput, Pressable } from "react-native";
import React from "react";
import { COLOR } from "@/constant/COLOR";
import { Image } from "expo-image";
import { BenderaIndonesia, imageForgortPassword } from "@/assets/temu-images";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { Link } from "expo-router";

const forgoPasswordPage = () => {
  return (
    <View style={styles.container}>
      <View style={styles.topestViewContainer}>
        <FontAwesome5
          name="arrow-left"
          size={24}
          color={COLOR.primary}
          style={{ marginLeft: 10, marginTop: 10 }}
        />
        <View
          style={{
            // backgroundColor: COLOR.backgrounDark,
            position: "absolute",
            right: 0,
            top: 0,
            width: "70%",
          }}
        >
          <View
            style={{
              backgroundColor: COLOR.primary,
              height: 40,
              width: "100%",
              zIndex: 2,
              borderBottomLeftRadius: 50,
            }}
          />
          <View
            style={{
              backgroundColor: COLOR.primary,
              height: 20,
              width: "85%",
              zIndex: 1,
              alignSelf: "flex-end",
              borderBottomLeftRadius: 60,
            }}
          />
        </View>
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
      <View style={styles.containerOtp}>
        <View style={styles.otpCol}>
          <TextInput style={styles.otpInput} maxLength={1} />
          <TextInput style={styles.otpInput} maxLength={1} />
          <TextInput style={styles.otpInput} maxLength={1} />
          <TextInput style={styles.otpInput} maxLength={1} />
        </View>
        <View style={styles.otpBtnContainer}>
          <Pressable style={styles.otpBtn}>Continue</Pressable>
        </View>
      </View>
      <View style={styles.textBottomestContainer}>
        <Text style={styles.textBottomest}>
          Didn't recive the code?{" "}
          <Link href={"/(auth)/register"} style={styles.textLinkBottomest}>
            Send Again
          </Link>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLOR.backgroundLight,
    flex: 1,
  },
  topestViewContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
    height: "auto",
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
    height: 295,
  },
  otpTextContainer: {
    alignItems: "center",
    marginHorizontal: 65,
  },
  otpTitle: {
    fontSize: 16,
    fontWeight: 900,
    color: COLOR.primary,
  },
  otpDescription: {
    textAlign: "center",
    fontSize: 10,
    fontWeight: 900,
  },
  containerOtp: {
    height: 100,
    marginTop: 45,
  },
  otpCol: {
    height: "65%",
    // backgroundColor: "pink",
    marginHorizontal: 60,
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 25,
  },
  otpInput: {
    width: 55,
    height: 55,
    borderWidth: 2,
    borderColor: "#aaa",
    borderRadius: 10,
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
  },
  otpBtnContainer: {
    // backgroundColor: "yellow",
    height: "50%",
    alignItems: "center",
    justifyContent: "center",
  },
  otpBtn: {
    backgroundColor: COLOR.primary,
    paddingHorizontal: 70,
    paddingVertical: 11,
    borderRadius: 13,
    color: COLOR.backgroundLight,
    fontSize: 20,
    fontWeight: "900",
  },
  textBottomestContainer: {
    // backgroundColor: "black",
    marginTop: 60,
    alignItems: "center",
  },
  textBottomest: {
    fontSize: 11,
    fontWeight: "900",
  },
  textLinkBottomest: {
    color: COLOR.primary,
  },
});
export default forgoPasswordPage;
