import React from "react";
import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import { icons } from "../../IconsAndImages";

export default function ResetPasswordScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={icons.eatmelogo} style={styles.logo} />
        <View style={styles.logoText}>
          <Text style={styles.headerText}>E a t m e</Text>
        </View>
        <View style={styles.welcomeText}>
          <Text style={{ fontSize: 24, fontWeight: "bold" }}>
            CONGRATULATION!
          </Text>
          <Text
            style={{
              fontSize: 14,
              fontWeight: "normal",
              color: "#525C67",
              top: 10,
            }}
          >
            You successfully rest your password.
          </Text>
          <Text
            style={{
              fontSize: 14,
              fontWeight: "normal",
              color: "#525C67",
              top: 10,
            }}
          >
            Now you are good to go
          </Text>
        </View>
      </View>
      <Image source={icons.congrat} style={styles.congrat} />
      <TouchableOpacity
        style={styles.done}
        onPress={() => {
          navigation.navigate("Login");
        }}
      >
        <Text style={{ fontSize: 16, fontWeight: "600", color: "white" }}>
          Jump to Log In
        </Text>
      </TouchableOpacity>
    </View>
  );
}
const WIDTH = Dimensions.get("screen").width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    width: WIDTH - (92 + 92),
    height: 60,
    top: 28,
    left: 92,
    justifyContent: "center",
  },
  logo: {
    width: 60,
    height: 60,
    borderRadius: 12,
    top: 35,
    left: 20,
  },
  logoText: {
    position: "absolute",
    width: 110,
    height: 40,
    top: 15,
    left: 90,
  },
  headerText: {
    fontSize: 25,
    color: "#FF6C44",
    fontWeight: "bold",
    top: 16,
  },
  welcomeText: {
    width: WIDTH - 40 * 2,
    height: 30,
    top: 80,
    right: 50,
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
  },
  congrat: {
    width: WIDTH - 44 * 2,
    height: 270,
    top: 220,
    left: 44,
  },
  done: {
    width: WIDTH - 24 * 2,
    height: 56,
    top: 350,
    left: 24,
    borderRadius: 8,
    backgroundColor: "#FF6C44",
    justifyContent: "center",
    alignItems: "center",
  },
});
