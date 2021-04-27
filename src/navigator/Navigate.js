import React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import SplashScreen from "../components/AppIntroduce/SplashScreen";
import OnBoardingScreen1 from "../components/AppIntroduce/OnBoardingScreen1";
import OnBoardingScreen2 from "../components/AppIntroduce/OnBoardingScreen2";
import OnBoardingScreen3 from "../components/AppIntroduce/OnBoardingScreen3";
import HomeScreen from "../components/Home/HomeScreen";
import Login from "../components/Login/Login";
import SignUp from "../components/SignUp/SignUp";
import ForgotPassword from "../components/ForgotPassword/ForgotPassword";
import ResetPasswordScreen from "../components/ResetPassword/ResetPasswordScreen";

const Stack = createStackNavigator();

export default function Navigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="OnBoardingScreen1"
          component={OnBoardingScreen1}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="OnBoardingScreen2"
          component={OnBoardingScreen2}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="OnBoardingScreen3"
          component={OnBoardingScreen3}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Register"
          component={SignUp}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Forgot"
          component={ForgotPassword}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
