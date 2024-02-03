import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FEEA",
  },
  subContainer: { flexDirection: "row", alignItems: "center" },
  mainTextContainer: { fontWeight: "bold", fontSize: 30, marginTop: 10 },
  subTextContainer: { fontSize: 16, margin: 20 },
  imageContainer: { width: 140, height: 140 },
  switchContainer: { marginLeft: 10 },
  darkModeContainer: { backgroundColor: "black", color: "white" },
  lightModeContainer: { color: "black" },
  pressableContainer: {
    marginTop: 10,
    backgroundColor: "#2FA",
    borderRadius: 16,
    paddingLeft: 40,
    paddingRight: 40,
  },
  form: {
    width: 400,
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 10, // for shadow
  },
  formMainTextContainer: {
    fontSize: 26,
    fontWeight: "bold",
  },
  formSubTextContainer: {
    fontSize: 16,
    color: "gray",
  },
  nameInputContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f3f3f3",
    borderRadius: 8,
    paddingHorizontal: 14,
    width: "100%", // Adjust width as necessary
    marginBottom: 20,
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: "pink",
    borderWidth: 2,
    paddingHorizontal: 10,
    borderRadius: 6,
  },

  errorInput: {
    borderColor: "red", //highlight error
  },
  passwordContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f3f3f3",
    borderRadius: 8,
    marginBottom: 20,
  },
  icon: {
    marginLeft: 10,
  },
});

export { styles };
