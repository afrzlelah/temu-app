import React, { useState, useRef } from "react";
import {
  View,
  Text,
  TextInput,
  Pressable,
  ScrollView,
  TouchableOpacity,
  Alert,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { styles } from "./StylesLogin";
import { Link, router } from "expo-router";

import PhoneInput, {
  ICountry,
  isValidPhoneNumber,
} from "react-native-international-phone-number";
import { COLOR } from "@/Style/COLOR";

const RegisterScreen = () => {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false); // Nama state lebih deskriptif
  const [selectedCountry, setSelectedCountry] = useState<null | ICountry>(null);
  const [inputValuePhone, setInputValuePhone] = useState<string>("");
  const phoneInputRef = useRef(null);

  const handleChangeCountry = (country: ICountry) => {
    setSelectedCountry(country);
  };

  const handleChangePhoneNumber = (number: string) => {
    setInputValuePhone(number);
  };

  const onSubmit = (form: any) => {
    Alert.alert(
      "Form Submitted",
      `First Name: ${firstName}\nLast Name: ${lastName}\nEmail: ${email}\nPhone: ${inputValuePhone}\nPassword: ${password}`,
    );
    if (!selectedCountry) {
      return Alert.alert("Error", "Please select a country");
    }
    if (!inputValuePhone) {
      return Alert.alert("Error", "Please enter your phone number");
    }
    const isValidPhone = isValidPhoneNumber(inputValuePhone, selectedCountry);
    if (!isValidPhone) {
      return Alert.alert("Error", "Please enter a valid phone number");
    } else {
      const phoneNumber = `${selectedCountry?.idd.root}${inputValuePhone}`;
    }
  };
  return (
    <ScrollView contentContainerStyle={styles.screen}>
      <StatusBar style="light" />

      {/* Header Section */}
      <View style={styles.header}>
        <Text style={styles.normalText}>Create Your Account</Text>
        <Text style={styles.headerText}>Sign Up</Text>
      </View>

      {/* Form Section */}
      <View style={styles.formContainer}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
          }}
        >
          <View
            style={{
              width: "85%",
              flexDirection: "row",
              justifyContent: "space-between",
              gap: 10,
            }}
          >
            <View style={{ flex: 1 }}>
              <Text style={styles.inputLabel}>First Name</Text>
              <TextInput
                keyboardType="default"
                value={firstName}
                onChangeText={setFirstName}
                placeholder="Enter Your First Name"
                placeholderTextColor="gray"
                style={styles.inputField}
              />
            </View>
            <View style={{ flex: 1 }}>
              <Text style={styles.inputLabel}>Last Name</Text>
              <TextInput
                keyboardType="default"
                value={lastName}
                onChangeText={setLastName}
                placeholder="Enter Your Last Name"
                placeholderTextColor="gray"
                style={styles.inputField}
              />
            </View>
          </View>
        </View>
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

        {/* Phone Number */}
        <View style={styles.inputGroup}>
          <Text style={styles.inputLabel}>Phone Number</Text>

          <View>
            <PhoneInput
              ref={phoneInputRef}
              value={inputValuePhone}
              selectedCountry={selectedCountry}
              defaultValue="81234567890"
              onChangePhoneNumber={handleChangePhoneNumber}
              onChangeSelectedCountry={handleChangeCountry}
              phoneInputStyles={{
                container: {
                  backgroundColor: "#dcdcdc",
                  borderRadius: 15, // Membuat sudut sangat bulat (oval)
                  height: 55, // Menambah tinggi input agar lebih lega
                  justifyContent: "space-between",
                  gap: 5,
                },
                flagContainer: {
                  borderRadius: 15, // Membuat background bendera jadi bulat sempurna
                  alignItems: "center",
                  width: 80,
                  backgroundColor: "#dcdcdc",
                },
                flag: {
                  width: 0,
                  fontSize: 20,
                  marginLeft: 10,
                },
                callingCode: {
                  fontWeight: "600",
                  color: "#000",
                },
                input: {
                  color: "#000",
                  fontSize: 16,
                  fontWeight: "400",
                  borderRadius: 15,
                },
              }}
            />
          </View>
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
        </View>

        {/* Confirm Passwoword */}
        <View style={styles.inputGroup}>
          <Text style={styles.inputLabel}>Confirm Password</Text>
          <View style={styles.passwordWrapper}>
            <TextInput
              secureTextEntry={!isPasswordVisible}
              value={confirmPassword}
              onChangeText={setConfirmPassword}
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
        </View>
        {/* Button Sign in  */}
        <View style={styles.buttonCenterer}>
          <Pressable style={styles.signInButton} onPress={onSubmit}>
            <Text style={styles.signInButtonText}>Create Account</Text>
          </Pressable>
          <View style={{ height: 20 }} />
          <View style={styles.dontHaveAnAccountGroup}>
            <Text style={styles.dontHaveAnAccountText}>
              Already Have An Account?
            </Text>
            <Pressable onPress={() => router.replace("/(auth)")}>
              <Text style={styles.dontHaveAnAccountTextLink}>Sign In</Text>
            </Pressable>
          </View>
        </View>
      </View>
      <View
        style={{
          height: 50,
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontSize: 9,
            color: "#000",
            fontWeight: "900",
            justifyContent: "center",
            alignItems: "center",
            paddingHorizontal: 25,
            textAlign: "center",
            marginBottom: 30,
          }}
        >
          By Signin bellow, You agree to the{" "}
          <Link href={"/(auth)"} style={{ color: COLOR.primary }}>
            Terms of Use
          </Link>{" "}
          and{" "}
          <Link href={"/(auth)"} style={{ color: COLOR.primary }}>
            Privacy Notice
          </Link>
        </Text>
      </View>
    </ScrollView>
  );
};

export default RegisterScreen;
