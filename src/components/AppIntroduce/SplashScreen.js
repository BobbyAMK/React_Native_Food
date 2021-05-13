import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { icons } from "../../IconsAndImages";

export default function SplashScreen({ navigation }) {
	return (
		<View style={styles.container}>
			{/*some onboard screen shown up*/}
			<TouchableOpacity
				style={{ justifyContent: "center", alignItems: "center" }}
				onPress={() => {
					navigation.navigate("OnBoardingScreen1");
				}}>
				<Image source={icons.eatmelogo} style={styles.logo} />
				<View style={styles.nameContainer}>
					<Text style={styles.text}>E a t</Text>
					<Text style={styles.text2}> m e</Text>
				</View>
			</TouchableOpacity>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	logo: {
		width: 90,
		height: 90,
	},
	nameContainer: {
		flexDirection: "row",
	},
	text: {
		fontSize: 30,
		color: "#FF6C44",
		fontWeight: "bold",
	},
	text2: {
		fontSize: 30,
		color: "black",
		fontWeight: "bold",
	},
});
