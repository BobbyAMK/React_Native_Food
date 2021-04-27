import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { icons } from "../../navigator";

export default function OnBoardingScreen3({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.topBackground}>
        <View style={styles.appLogo}>
          <Image source={icons.eatmelogo} style={styles.logo} />
          <Text style={styles.name}>Eatme</Text>
        </View>
      </View>
      <Image source={icons.introImage3} style={styles.introImage3} />
      <Text style={styles.text}>Receive the Great Food</Text>
      <View style={styles.text2View}>
        <Text style={styles.text2}>
          You’ll receive the great food within a hour.
        </Text>
        <Text style={styles.text2}>
          And get free delivery credits for every order.
        </Text>
      </View>
      <TouchableOpacity
        style={styles.start}
        onPress={() => {
          navigation.navigate("Login");
        }}
      >
        <Text style={styles.text4}>Let's Get Started</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  appLogo: {
    position: "absolute",
    flexDirection: "row",
    left: 120,
    top: 48,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 60,
    height: 60,
  },
  name: {
    marginLeft: 15,
    fontSize: 32,
    fontWeight: "bold",
    color: "#FF6C44",
  },
  introImage3: {
    position: "absolute",
    width: 290,
    height: 303,
    top: 156,
    left: 55,
  },
  topBackground: {
    width: "100%",
    height: 400,
    backgroundColor: "rgba(255, 92, 1, 0.2)",
    borderBottomLeftRadius: 150,
    borderBottomRightRadius: 150,
  },
  text: {
    position: "absolute",
    fontSize: 24,
    fontWeight: "bold",
    top: 500,
    left: 90,
  },
  text2View: {
    position: "absolute",
    width: 307,
    height: 48,
    top: 550,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
  },
  text2: {
    opacity: 0.8,
    fontSize: 14,
    fontWeight: "normal",
  },
  skip: {
    position: "absolute",
    top: 700,
    left: 50,
  },
  text3: {
    fontSize: 16,
    fontWeight: "normal",
  },
  start: {
    position: "absolute",
    width: 327,
    height: 56,
    top: 680,
    left: 40,
    backgroundColor: "#FF6C44",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  text4: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
  },
});
