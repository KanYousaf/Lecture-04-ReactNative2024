import {
  View,
  Text,
  Image,
  Switch,
  useColorScheme,
  Pressable,
  TextInput,
} from "react-native";
import { useState } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { styles } from "./customStyle/themeScreen";

export default function App() {
  const isDarkTheme = useColorScheme() === "dark";
  const [isDark, setIsDark] = useState(isDarkTheme);
  const [pressableColor, setPressableColor] = useState("#2FA");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fName, setFName] = useState("");
  const [sName, setSName] = useState("");
  const [isEmailValid, setEmailValid] = useState(true);
  const [isPasswordValid, setPasswordValid] = useState(true);
  const [isFNameValid, setFNameValid] = useState(true);
  const [isSNameValid, setSNameValid] = useState(true);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handlePressIn = () => {
    setPressableColor("#BFAF");
  };

  const handlePressOut = () => {
    setPressableColor("#2FA");
  };

  const checkEmail = (email) => {
    const allowedEmails =
      /^[^\s@]+@(gmail\.com|uettaxila\.edu\.pk|students\.uettaxila\.edu\.pk)$/;
    const isValid = allowedEmails.test(email);
    if (!isValid) {
      setErrorMessage("Enter correct email or password");
      return false;
    }
    return true;
  };

  const checkPassword = (password) => {
    const allowedPassword =
      /^(?=.*[!@#$%^&*(),.?":{}|<>])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/;
    const isValid = allowedPassword.test(password);
    if (!isValid) {
      setErrorMessage("Enter correct email or password");
      return false;
    }
    return true;
  };

  const handleSignUp = () => {
    const emailIsValid = checkEmail(email);
    const passwordIsValid = checkPassword(password);
    const fNameIsValid = fName.trim() !== "";
    const sNameIsValid = sName.trim() !== "";

    setEmailValid(emailIsValid);
    setPasswordValid(passwordIsValid);
    setFNameValid(fNameIsValid);
    setSNameValid(sNameIsValid);

    if (emailIsValid && passwordIsValid && fNameIsValid && sNameIsValid) {
      setSuccessMessage("Profile Created Successfully");
      setEmail("");
      setPassword("");
      setFName("");
      setSName("");
      setErrorMessage("");
    } else {
      setErrorMessage("Please check your input fields");
      setSuccessMessage("");
    }
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <View
      style={[
        styles.mainContainer,
        isDark ? styles.darkModeContainer : styles.lightModeContainer,
      ]}
    >
      <Text
        style={[
          styles.mainTextContainer,
          isDark ? styles.darkModeContainer : styles.lightModeContainer,
        ]}
      >
        SE-348: Mobile Application Development
      </Text>
      <Text
        style={[
          styles.subTextContainer,
          isDark ? styles.darkModeContainer : styles.lightModeContainer,
        ]}
      >
        Welcome to the class of Mobile App Development, where you learn new
        things
      </Text>
      <Image
        style={styles.imageContainer}
        source={require("./assets/p_cat2.png")}
      />
      <View
        style={[
          styles.subContainer,
          isDark ? styles.darkModeContainer : styles.lightModeContainer,
        ]}
      >
        <Text
          style={[
            styles.subTextContainer,
            isDark ? styles.darkModeContainer : styles.lightModeContainer,
          ]}
        >
          Choose Theme
        </Text>
        <Switch
          style={styles.switchContainer}
          value={isDark}
          onValueChange={() => {
            setIsDark(!isDark);
          }}
        />
      </View>
      <View style={[styles.form]}>
        <Text style={styles.formMainTextContainer}>Sign Up</Text>
        <Text style={styles.formSubTextContainer}>It's quick and easy </Text>
        <View style={styles.nameInputContainer}>
          <TextInput
            style={[styles.input, !isFNameValid && styles.errorInput]}
            placeholder="First name"
            value={fName}
            onChangeText={(value) => {
              setFName(value);
              setFNameValid(true);
            }}
          />
          <TextInput
            style={[styles.input, !isSNameValid && styles.errorInput]}
            placeholder="Surname"
            value={sName}
            onChangeText={(value) => {
              setSName(value);
              setSNameValid(true);
            }}
          />
        </View>
        <View style={styles.passwordContainer}>
          <TextInput
            style={[
              styles.input,
              { width: "100%" },
              !isEmailValid && styles.errorInput,
            ]}
            placeholder="Email"
            value={email}
            onChangeText={(value) => {
              setEmail(value);
              setEmailValid(true);
            }}
          />
        </View>
        <View style={styles.passwordContainer}>
          <TextInput
            style={[
              styles.input,
              { flex: 1 },
              !isPasswordValid && styles.errorInput,
            ]}
            placeholder="Password"
            secureTextEntry={!showPassword}
            value={password}
            onChangeText={(value) => {
              setPassword(value);
              setPasswordValid(true);
            }}
          />
          <MaterialCommunityIcons
            name={showPassword ? "eye-off" : "eye"}
            size={20}
            color="#aaa"
            style={styles.icon}
            onPress={toggleShowPassword}
          />
        </View>
      </View>
      <Pressable
        style={[
          styles.pressableContainer,
          { backgroundColor: pressableColor, marginTop: 10 },
        ]}
        onPress={handleSignUp}
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
      >
        {({ pressed }) => (
          <Text style={styles.subTextContainer}>
            {pressed ? "Pressed!" : "Press"}
          </Text>
        )}
      </Pressable>
      <Text
        style={[
          styles.subTextContainer,
          isDark ? styles.darkModeContainer : styles.lightModeContainer,
        ]}
      >
        {successMessage ? successMessage : errorMessage}
      </Text>
    </View>
  );
}
