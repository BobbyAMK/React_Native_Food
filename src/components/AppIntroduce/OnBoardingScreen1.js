import React from "react";
import {
	StyleSheet,
	Text,
	View,
	Image,
	Dimensions,
	TouchableOpacity,
} from "react-native";
import { icons } from "../../IconsAndImages";

export default function OnBoardingScreen1({ navigation }) {
	return (
		<View style={styles.container}>
			<View style={styles.topBackground}>
				<View style={styles.appLogo}>
					<Image source={icons.eatmelogo} style={styles.logo} />
					<Text style={styles.name}>Eatme</Text>
				</View>
			</View>
			<Image source={icons.introImage1} style={styles.introImage1} />
			<Text style={styles.text}>Choose a Favourite Food</Text>
			<View style={styles.text2View}>
				<Text style={styles.text2}>
					When you order Eat Me, we’ll hook you up with
				</Text>
				<Text style={styles.text2}>exclusive coupon, specials and rewards</Text>
			</View>

			{/*direct to login*/}

			<TouchableOpacity
				style={styles.skip}
				onPress={() => {
					navigation.navigate("Login");
				}}>
				<Text style={styles.text3}>Skip</Text>
			</TouchableOpacity>

			{/*go to next onboard screen*/}

			<TouchableOpacity
				style={styles.next}
				onPress={() => {
					navigation.navigate("OnBoardingScreen2");
				}}>
				<Text style={styles.text4}>Next</Text>
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
	introImage1: {
		position: "absolute",
		width: 240,
		height: 303,
		top: 156,
		left: 80,
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
		left: 70,
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
	next: {
		position: "absolute",
		width: 168,
		height: 56,
		top: 680,
		left: 210,
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
