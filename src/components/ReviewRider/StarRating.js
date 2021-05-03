import React, { Component, useState } from "react";
import { Text, StyleSheet, View, Image, TouchableOpacity } from "react-native";
import { icons } from "../../IconsAndImages";

export default function StarRating() {
  const [defaultRating, setDefaultRating] = useState(0);
  const [maxRating, setMaxRating] = useState([1, 2, 3, 4, 5]);

  return (
    <View style={styles.starContainer}>
      {maxRating.map((item, index) => {
        return (
          <TouchableOpacity
            activeOpacity={0.6}
            key={item}
            onPress={() => setDefaultRating(item)}
          >
            <Image
              style={styles.star}
              source={
                item <= defaultRating ? icons.filledStar : icons.emptyStar
              }
            />
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  starContainer: {
    flexDirection: "row",
    justifyContent: "center",
    position: "absolute",
    top: 380,
  },
  star: {
    width: 32,
    height: 32,
    resizeMode: "cover",
    margin: 10,
  },
});
