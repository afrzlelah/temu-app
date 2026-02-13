import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Pressable,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { styles } from "./StylesAuth";
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

        {/* Button Sign in  */}
        <View style={styles.buttonCenterer}>
          <Pressable style={styles.signInButton}>
            <Text style={styles.signInButtonText}>Sign In</Text>
          </Pressable>
        </View>
      </View>

      {/* Another Sign In */}
      <View style={styles.anotherSignIn}>
        <View style={styles.anotherSignInGroup}>
          <View style={styles.garisTextAnotherSignIn} />
          <View>
            <Text style={styles.anotherSignInText}>Or Sign In With</Text>
          </View>
          <View style={styles.garisTextAnotherSignIn} />
        </View>

        <View style={styles}>
          <Pressable>
            <FontAwesome5
              name={isPasswordVisible ? "eye" : "eye-slash"}
              size={20}
              color="black"
            />
          </Pressable>
          <Pressable>
            <FontAwesome5
              name={isPasswordVisible ? "eye" : "eye-slash"}
              size={20}
              color="black"
            />
          </Pressable>
          <Pressable>
            <FontAwesome5
              name={isPasswordVisible ? "eye" : "eye-slash"}
              size={20}
              color="black"
            />
          </Pressable>
        </View>
        <View>
          <Text>Don't Have An Account?</Text>
          <Pressable onPress={() => console.log("Create Account")}></Pressable>
        </View>
      </View>
    </ScrollView>
  );
};

export default LoginScreen;
