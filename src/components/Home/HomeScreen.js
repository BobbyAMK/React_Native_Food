import React, { Component } from "react";
import {
  Text,
  StyleSheet,
  View,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  LogBox,
} from "react-native";

import Header from "../Header/Header";
import Categories from "../Categories/Categories";
import Popular from "../Popular/Popular";
import Recommended from "../Recommened/Recommened";

LogBox.ignoreLogs(["VirtualizedLists should never be nested"]);

export default class Screen extends Component {
  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <Header />
        <ScrollView style={{ top: 100 }}>
          <Categories />
          <View style={{ top: 10 }}>
            <View style={styles.container}>
              <Text style={styles.text}>Popular near you</Text>
              <TouchableOpacity style={styles.showAllContainer}>
                <Text style={styles.showAll}>Show all</Text>
              </TouchableOpacity>
            </View>
          </View>
          <Popular />
          <View style={{ top: 10 }}>
            <View style={styles.container}>
              <Text style={styles.text}>Recommended</Text>
              <TouchableOpacity style={styles.showAllContainer}>
                <Text style={styles.showAll}>Show all</Text>
              </TouchableOpacity>
            </View>
          </View>
          <Recommended />
          {/*<ListingHint />
          <HintCategory />*/}
        </ScrollView>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: 327,
    height: 50,
  },
  text: {
    width: 200,
    height: 40,
    marginBottom: 10,
    fontWeight: "600",
    fontSize: 24,
  },
  showAllContainer: {
    width: 70,
    height: 24,
    left: 100,
    marginBottom: 10,
  },
  showAll: {
    fontWeight: "600",
    fontSize: 18,
    color: "#FF6C44",
  },
});
