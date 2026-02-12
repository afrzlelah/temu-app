import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Pressable,
  ScrollView,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { COLOR } from "@/Style/COLOR";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { Link } from "expo-router";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false); // Nama state lebih deskriptif

  return (
    <ScrollView contentContainerStyle={styles.screen}>
      <StatusBar style="light" />

      {/* Header Section */}
      <View style={styles.header}>
        <Text style={styles.normalText}>Welcome Back!</Text>
        <Text style={styles.headerText}>Sign In</Text>
      </View>

      {/* Form Section */}
      <View style={styles.formContainer}>
        {/* Email Input */}
        <View style={styles.inputGroup}>
          <Text style={styles.inputLabel}>Email</Text>
          <TextInput
            keyboardType="email-address"
            value={email}
            onChangeText={setEmail}
            autoCapitalize="none"
            style={styles.inputField}
            placeholder="Enter Your Email Address"
            placeholderTextColor="gray"
          />
        </View>

        {/* Password Input */}
        <View style={styles.inputGroup}>
          <Text style={styles.inputLabel}>Password</Text>
          <View style={styles.passwordWrapper}>
            <TextInput
              secureTextEntry={!isPasswordVisible}
              value={password}
              onChangeText={setPassword}
              style={styles.inputFieldPassword}
              placeholder="Enter Your Password"
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

          {/* Forgot Password */}
          <View style={styles.forgotPassContainer}>
            <Link href={"/"}>
              <Text style={styles.forgotPassText}>Forgot Password?</Text>
            </Link>
          </View>
        </View>

        {/* Action Button */}
        <View style={styles.buttonCenterer}>
          <Pressable style={styles.signInButton}>
            <Text style={styles.signInButtonText}>Sign In</Text>
          </Pressable>
        </View>
      </View>

      {/* Footer / Decorative Section */}
      <View style={styles.footerSpacer} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flexGrow: 1, // Agar bisa scroll jika layar kecil
    backgroundColor: "#fff",
  },
  header: {
    backgroundColor: COLOR.primary,
    height: 200,
    borderBottomRightRadius: 140,
    justifyContent: "center",
    paddingLeft: 30,
    paddingTop: 15,
  },
  normalText: {
    color: "#f8e1ff",
    fontSize: 20,
    fontWeight: "bold",
  },
  headerText: {
    color: "#f8e1ff",
    fontSize: 50,
    fontWeight: "800",
  },
  formContainer: {
    marginTop: 20,
    paddingVertical: 20,
    gap: 20,
  },
  inputGroup: {
    marginHorizontal: 30,
  },
  inputLabel: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
    color: COLOR.primary,
  },
  inputField: {
    backgroundColor: "#dcdcdc",
    paddingHorizontal: 20,
    height: 55,
    borderRadius: 15,
    color: "#000",
    fontSize: 16,
  },
  passwordWrapper: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#dcdcdc",
    borderRadius: 15,
    height: 55,
    overflow: "hidden",
  },
  inputFieldPassword: {
    flex: 1,
    paddingHorizontal: 20,
    height: "100%",
    color: "#000",
    fontSize: 16,
  },
  eyeIcon: {
    paddingHorizontal: 15,
  },
  forgotPassContainer: {
    flexDirection: "row-reverse",
    marginTop: 10,
  },
  forgotPassText: {
    fontSize: 14,
    fontWeight: "bold",
    color: COLOR.second,
  },
  buttonCenterer: {
    alignItems: "center",
    marginTop: 10,
  },
  signInButton: {
    backgroundColor: COLOR.primary,
    paddingVertical: 15,
    width: "70%",
    borderRadius: 15,
    alignItems: "center",
  },
  signInButtonText: {
    color: "#f8e1ff",
    fontSize: 18,
    fontWeight: "800",
  },
  footerSpacer: {
    height: 100,
    backgroundColor: "black",
    marginTop: "auto",
  },
});

export default LoginScreen;
