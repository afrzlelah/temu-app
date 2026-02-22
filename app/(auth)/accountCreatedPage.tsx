import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Pressable,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
} from "react-native";
import React, { useRef, useState } from "react";
import { COLOR } from "@/constant/COLOR";
import { Image } from "expo-image";
import { BenderaIndonesia, imageForgortPassword } from "@/assets/temu-images";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { Link, router } from "expo-router";

const setNewPasswordPage = () => {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS == "ios" ? "padding" : "height"}
    >
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        keyboardShouldPersistTaps="handled"
        keyboardDismissMode="on-drag"
      >
        <View style={styles.container}>
          <View style={styles.topestViewContainer}>
            <Link
              href={"/(auth)/forgotPasswordPage"}
              style={{ marginLeft: 20, marginTop: 40 }}
            >
              <FontAwesome5 name="arrow-left" size={24} color={COLOR.primary} />
            </Link>
            <View
              style={{
                // backgroundColor: COLOR.backgrounDark,
                position: "absolute",
                right: 0,
                top: 0,
                width: "70%",
                height: "100%",
              }}
            >
              <View
                style={{
                  backgroundColor: COLOR.primary,
                  height: 60,
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
            <Text style={styles.verificationText}>Account Created!</Text>
            <Text style={styles.enterCodeText}>Welcome to NEMU.</Text>
          </View>
          <View style={styles.imageContainer}>
            <Image
              source={imageForgortPassword}
              style={{ width: 250, height: 250 }}
            />
          </View>
          <View style={styles.containerKata}>
            <Text style={styles.kata1}>Your Account has been created</Text>
            <Text style={styles.kata2}>Successfully</Text>
          </View>
          <View style={styles.buttonContainer}>
            <Link href={"/(auth)"} style={styles.button}>
              <Text style={styles.buttonText}>Continue</Text>
            </Link>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
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
    height: 100,
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
  formContainer: {
    marginTop: 20,
    paddingVertical: 20,
  },
  containerKata: {
    marginTop: 70,
    alignItems: "center",
  },
  kata1: {
    fontSize: 20,
    fontWeight: "900",
  },
  kata2: {
    fontSize: 40,
    fontWeight: "900",
    color: COLOR.primary,
  },
  buttonContainer: {
    marginTop: 60,
    alignItems: "center",
  },
  button: {
    backgroundColor: COLOR.primary,
    paddingHorizontal: 65,
    paddingVertical: 8,
    borderRadius: 15,
  },
  buttonText: {
    fontSize: 25,
    fontWeight: "900",
    color: COLOR.backgroundLight,
  },
});
export default setNewPasswordPage;
