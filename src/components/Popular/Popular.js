import React from "react";
import {
  Text,
  StyleSheet,
  View,
  FlatList,
  Image,
  TouchableOpacity,
  TextInput,
  Dimensions,
  SafeAreaView,
  RefreshControl,
  ActivityIndicator,
} from "react-native";
import { icons, images } from "../../navigator";
import usePopular from "./usePopular";

const renderPopular = ({ item, index }) => {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.calories}>
        <Image
          source={icons.fire}
          style={{ width: 16, height: 16, top: 16, left: 16 }}
        />
        <Text style={styles.caloriesText}>{item.calories} Calories</Text>
        <HeartButton />
      </View>
      <Image
        source={{ uri: item.imageUrl }}
        resizeMode="cover"
        style={styles.foodImages}
      />
      <View style={styles.detailContainer}>
        <Text style={styles.productName}>{item.name}</Text>
        <Text style={styles.productDescription}>{item.description}</Text>
        <Text style={styles.productPrice}>{item.price}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default function Popular() {
  const [onRefresh, popular] = usePopular();
  return (
    <View>
      <FlatList
        data={popular}
        horizontal
        renderItem={renderPopular}
        keyExtractor={(item, index) => {
          return "popular-" + item.id;
        }}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          justifyContent: "center",
          alignItem: "center",
          paddingHorizontal: 20,
        }}
      />
    </View>
  );
}

const WIDTH = Dimensions.get("screen").width;

const styles = StyleSheet.create({
  container: {
    paddingBottom: 15,
    borderRadius: 8,
    backgroundColor: "white",
    marginBottom: 10,
    marginRight: 15,
    width: WIDTH - (24 + 201),
    height: 221,
  },
  foodImages: {
    position: "absolute",
    width: 80,
    height: 80,
    borderRadius: 25,
    top: 48,
    marginLeft: 52,
  },
  detailContainer: {
    marginLeft: 15,
    top: 114,
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
  },
  calories: {
    flexDirection: "row",
  },
  caloriesText: {
    width: 51,
    height: 12,
    top: 18,
    left: 20,
    fontSize: 10,
    fontWeight: "normal",
    color: "#757D85",
  },
  productName: {
    fontSize: 14,
    fontWeight: "600",
    color: "#111A2C",
  },
  productDescription: {
    marginTop: 5,
    fontSize: 10,
    fontWeight: "500",
    color: "#757D85",
  },
  productPrice: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#111A2C",
    marginTop: 5,
  },
});
