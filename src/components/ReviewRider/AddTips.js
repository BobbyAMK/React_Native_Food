import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";

const money = ["No tips", "1", "2", "3", "4", "5"];

export default function AddTips() {
	const [selectedIndex, setSelectedIndex] = useState(0);
	return (
		<View style={styles.container}>
			{money.map((item, index) => {
				<TouchableOpacity
					key={index}
					style={selectedIndex === index ? styles.selectedBox : styles.box}
					onPress={() => {
						setSelectedIndex({ selectedIndex: index });
					}}>
					<Text
						style={selectedIndex === index ? styles.selectedText : styles.text}>
						{item}
					</Text>
				</TouchableOpacity>;
			})}
			<Text></Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		position: "absolute",
		flexDirection: "row",
		top: 470,
	},
	box: {
		justifyContent: "center",
		alignItems: "center",
		marginHorizontal: 8,
		borderColor: "#BBBDC1",
		borderWidth: 1,
		height: 40,
		width: 40,
		borderRadius: 8,
		backgroundColor: "#ffffff",
	},
	selectedBox: {
		justifyContent: "center",
		alignItems: "center",
		marginHorizontal: 8,
		height: 40,
		width: 40,
		borderRadius: 8,
		backgroundColor: "#FF6C44",
	},
	selectedText: {
		color: "black",
	},
	text: {
		color: "white",
	},
});
