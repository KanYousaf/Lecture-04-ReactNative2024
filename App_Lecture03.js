import {
  View,
  Text,
  Image,
  Switch,
  StyleSheet,
  useColorScheme,
  Pressable,
} from "react-native";
import { useState } from "react";

function displayUserName(user) {
  return user.firstName + " " + user.lastName;
}

export default function App() {
  const userName = { firstName: "Kanwal", lastName: "Yousaf" };
  const isDarkTheme = useColorScheme() === "dark";
  const [isDark, setIsDark] = useState(isDarkTheme);
  const [counter, setIsCounter] = useState(0);
  const [pressableColor, setPressableColor] = useState("#F2FA");

  const countHandler = () => {
    setIsCounter(counter + 1);
  };

  const handlePressIn = () => {
    setPressableColor("#A3DFD3");
  };

  const handlePressOut = () => {
    setPressableColor("#F2FA");
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
        Welcome to the class of Mobile App Develeopment, where you learn new
        things
      </Text>
      <Image
        style={styles.imageContainer}
        source={require("./assets/p_cat2.png")}
      />
      <Text
        style={[
          styles.subTextContainer,
          isDark ? styles.darkModeContainer : styles.lightModeContainer,
        ]}
      >
        Hello +++++++++++++ : {displayUserName(userName)}
      </Text>
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
      <Pressable
        style={[
          styles.pressableContainer,
          { backgroundColor: pressableColor },
          isDark
            ? styles.pressableDarkModeContainer
            : styles.lightModeContainer,
        ]}
        onPress={countHandler}
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
        Counter : {counter}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: { flex: 1, alignItems: "center", backgroundColor: "#FEEA" },
  subContainer: { flexDirection: "row", alignItems: "center" },
  mainTextContainer: { fontWeight: "bold", fontSize: 30 },
  subTextContainer: { fontSize: 16, margin: 20 },
  imageContainer: { width: 200, height: 200 },
  switchContainer: { marginLeft: 10 },
  darkModeContainer: { backgroundColor: "black", color: "white" },
  lightModeContainer: { color: "black" },
  pressableContainer: {
    backgroundColor: "#F2FA",
    borderRadius: 10,
    paddingLeft: 40,
    paddingRight: 40,
  },
  pressableDarkModeContainer: { backgroundColor: "#F2FA" },
});
