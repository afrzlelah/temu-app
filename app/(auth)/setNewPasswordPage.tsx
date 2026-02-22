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
            <Text style={styles.verificationText}>Set New Password</Text>
            <Text style={styles.enterCodeText}>
              Enter The Code to Continue{" "}
            </Text>
          </View>
          <View style={styles.imageContainer}>
            <Image
              source={imageForgortPassword}
              style={{ width: 250, height: 250 }}
            />
          </View>

          <View style={styles.formContainer}>
            {/* New Password Input */}
            <View style={styles.inputGroup}>
              <Text style={styles.inputLabel}>Set New Password</Text>
              <TextInput
                keyboardType="default"
                value={newPassword}
                onChangeText={setNewPassword}
                autoCapitalize="none"
                style={styles.inputField}
                placeholder="Create New Password"
                placeholderTextColor="gray"
              />
            </View>
            {/* Confirm New Password Input */}
            <View style={styles.inputGroup}>
              <Text style={styles.inputLabel}>Confirm Password</Text>
              <View style={styles.passwordWrapper}>
                <TextInput
                  secureTextEntry={!isPasswordVisible}
                  value={confirmPassword}
                  onChangeText={setConfirmPassword}
                  style={styles.inputFieldPassword}
                  placeholder="Confirms Your Password"
                  placeholderTextColor="gray"
                />
                <Pressable
                  style={styles.eyeIcon}
                  onPress={() => setIsPasswordVisible(!isPasswordVisible)}
                >
                  <FontAwesome5
                    name={isPasswordVisible ? "eye" : "eye-slash"}
                    size={20}
                    color="black"
                  />
                </Pressable>
              </View>
            </View>
            <View style={styles.otpBtnContainer}>
              <Pressable
                style={styles.otpBtn}
                onPress={() => router.push("/(auth)/passwordChangedPage")}
              >
                <Text
                  style={{ color: "white", fontSize: 20, fontWeight: "900" }}
                >
                  Reset Password
                </Text>
              </Pressable>
            </View>
            <View
              style={{
                alignItems: "center",
                marginTop: 30,
              }}
            >
              <Link href={"/(auth)/forgotPasswordPage"} style={{ padding: 10 }}>
                <Text style={{ color: COLOR.primary, fontWeight: "900" }}>
                  Reset Pasword Later?
                </Text>
              </Link>
            </View>
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
  otpBtnContainer: {
    // backgroundColor: "yellow",
    marginTop: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  otpBtn: {
    backgroundColor: COLOR.primary,
    paddingHorizontal: 70,
    paddingVertical: 11,
    borderRadius: 13,
    color: COLOR.backgroundLight,
  },
  inputGroup: {
    marginHorizontal: 30,
    marginBottom: 25,
  },
  inputLabel: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
    color: COLOR.primary,
  },
  inputField: {
    backgroundColor: "#e9e9e9",
    paddingHorizontal: 20,
    height: 55,
    borderRadius: 20,
    color: "#000",
    fontSize: 16,
    width: "100%",
  },
  passwordWrapper: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#e9e9e9",
    borderRadius: 20,
    height: 55,
    overflow: "hidden",
  },
  inputFieldPassword: {
    height: "100%",
    color: "#000",
    fontSize: 16,
    paddingHorizontal: 20,
    width: "85%",
  },
  eyeIcon: {
    height: "100%",
    width: "100%",
    justifyContent: "center",
    paddingLeft: 12,
  },
});
export default setNewPasswordPage;
