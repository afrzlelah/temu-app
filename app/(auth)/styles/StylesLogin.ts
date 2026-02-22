import { COLOR } from "@/constant/COLOR";
import { StyleSheet, TextStyle, ViewStyle } from "react-native";

export const styles = StyleSheet.create({
  screen: {
    flexGrow: 1, // Agar bisa scroll jika layar kecil
    backgroundColor: "#fff",
    justifyContent: "space-between",
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
    backgroundColor: "#e9e9e9",
    paddingHorizontal: 20,
    height: 55,
    borderRadius: 15,
    color: "#000",
    fontSize: 16,
    width: "100%",
  },
  passwordWrapper: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#e9e9e9",
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
    backgroundColor: "#e9e9e9",
  },
  forgotPassContainer: {
    flexDirection: "row-reverse",
    marginTop: 10,
  },
  forgotPassText: {
    fontSize: 14,
    fontWeight: "bold",
    color: COLOR.primary,
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
    color: "#fff",
    fontSize: 22,
    fontWeight: "900",
  },
  anotherSignIn: {
    height: 250,
    justifyContent: "space-around",
    alignItems: "center",
  },
  anotherSignInText: {
    fontSize: 12,
    fontWeight: 500,
    color: "#a9a9a9",
    backgroundColor: "white",
    paddingHorizontal: 10,
  },
  anotherSignInGroup: {
    width: "76%",
    height: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "gray",
  },
  iconAnotherSignInGroup: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    gap: 20,
  },
  iconAnotherSignIn: {
    borderWidth: 1,
    padding: 7,
    borderRadius: 50,
    width: 40,
    alignItems: "center",
  },
  dontHaveAnAccountGroup: {
    marginBottom: 40,
    flexDirection: "row",
    gap: 3,
  },
  dontHaveAnAccountText: {
    fontSize: 12,
    fontWeight: 900,
    paddingVertical: 10,
  },
  dontHaveAnAccountTextLink: {
    fontSize: 13,
    color: COLOR.primary,
    fontWeight: 900,
  },
});
