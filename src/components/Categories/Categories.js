import React, { Component } from "react";
import {
  Text,
  StyleSheet,
  View,
  Image,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { images, icons } from "../../navigator";
import useCategories from "./useCategories";

const renderCategories = ({ item, index }) => {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: item.imageUrl }}
          resizeMode="contain"
          style={styles.image}
        />
      </View>
      <Text style={styles.categoryName}>{item.name}</Text>
    </TouchableOpacity>
  );
};

export default function Categories() {
  const [onRefresh, categories] = useCategories();
  return (
    <View>
      <FlatList
        data={categories}
        keyExtractor={(item, index) => {
          return "categories-" + item.id;
        }}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={renderCategories}
        contentContainerStyle={{
          justifyContent: "center",
          alignItems: "center",
          paddingHorizontal: 20,
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 128,
    height: 48,
    padding: 10,
    alignItems: "center",
    borderRadius: 10,
    justifyContent: "center",
    backgroundColor: "#F5F5F8",
    marginRight: 10,
    flexDirection: "row",
  },
  imageContainer: {
    width: 30,
    height: 30,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 30,
    height: 30,
  },
  categoryName: {
    fontSize: 14,
    color: "black",
    fontWeight: "500",
  },
});
