import { COLOR } from "@/Style/COLOR";
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
  anotherSignIn: {
    height: 250,
    justifyContent: "space-around",
    alignItems: "center",
  },
  anotherSignInText: {
    fontSize: 12,
    fontWeight: 500,
    color: "#767676",
  },
  anotherSignInGroup: {
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  garisTextAnotherSignIn: {
    backgroundColor: "#767676",
    height: 2,
    flex: 1,
    marginHorizontal: 20,
  },
});
