import React, { Component, useState } from "react";
import { SafeAreaView } from "react-native";
import {
	Text,
	StyleSheet,
	View,
	Image,
	TouchableOpacity,
	TextInput,
	FlatList,
	Dimensions,
	ActivityIndicator,
} from "react-native";
import { icons, images, data } from "../../IconsAndImages";
import StarRating from "./StarRating";
import AddTips from "./AddTips";

const WIDTH = Dimensions.get("screen").width;

export default function ReviewRider() {
	return (
		<SafeAreaView style={styles.container}>
			<Text style={styles.headerText}>Review Rider</Text>
			<Image source={images.rider} style={styles.riderImage} />
			<Text style={styles.riderName}>William Adams</Text>
			<Text style={styles.riderInfo}>Delivery Man</Text>
			<Text style={styles.rating}>Please Rate Delivery Service</Text>
			<StarRating />
			<Text
				style={{
					position: "absolute",
					top: 450,
					left: 25,
					fontSize: 14,
					fontWeight: "bold",
				}}>
				Add Tips
			</Text>
			<AddTips />
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	headerText: {
		position: "absolute",
		top: 40,
		fontSize: 24,
		fontWeight: "bold",
	},
	riderImage: {
		position: "absolute",
		top: 100,
		width: 120,
		height: 120,
		borderRadius: 8,
	},
	riderName: {
		fontSize: 22,
		fontWeight: "bold",
		position: "absolute",
		top: 250,
	},
	riderInfo: {
		position: "absolute",
		top: 290,
		fontSize: 16,
		fontWeight: "normal",
	},
	rating: {
		position: "absolute",
		top: 350,
		fontSize: 20,
		fontWeight: "500",
	},
	tips: {
		position: "absolute",
		flexDirection: "row",
		top: 500,
	},
});
