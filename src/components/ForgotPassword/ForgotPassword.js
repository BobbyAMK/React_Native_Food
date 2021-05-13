import React, { Component } from "react";
import {
	Text,
	StyleSheet,
	View,
	Image,
	TouchableOpacity,
	Dimensions,
	TextInput,
	Switch,
	Alert,
} from "react-native";
import { icons, images, data } from "../../IconsAndImages";
import axios from "axios";

const WIDTH = Dimensions.get("screen").width;

export default class ForgotPassword extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: "dinhhbt13121999@gmail.com",
		};
	}
	render() {
		return (
			<View style={{ flex: 1 }}>
				<View style={styles.header}>
					<Image source={icons.eatmelogo} style={styles.logo} />
					<View style={styles.logoText}>
						<Text style={styles.headerText}>E a t m e</Text>
					</View>
					<Text
						style={{
							fontSize: 30,
							fontWeight: "bold",
							top: 40,
							width: 270,
							right: 20,
						}}>
						Password Recovery
					</Text>
					<View style={styles.welcomeText}>
						<Text style={{ fontSize: 16, fontWeight: "normal" }}>
							Please enter your email address to recover
						</Text>
						<Text style={{ fontSize: 16, fontWeight: "normal" }}>
							your password
						</Text>
					</View>
				</View>
				<View style={styles.email}>
					<Text style={{ fontSize: 14, top: 1, left: 0 }}>Email</Text>
					<View style={styles.emailInput}>
						{/*email input*/}
						<TextInput
							autoCapitalize="none"
							autoCorrect={false}
							keyboardType="email-address"
							placeholder="Enter your Email"
							value={this.state.email}
							onChangeText={(text) => this.setState({ email: text })}
						/>
					</View>
				</View>
				<View style={styles.sendEmailContainer}>
					{/*send password recovery url to your email*/}
					<TouchableOpacity
						style={styles.sendEmailButton}
						onPress={this.onSendEmail}>
						<Text style={styles.sendEmailText}>Send Email</Text>
					</TouchableOpacity>
				</View>
			</View>
		);
	}
	// send password recovery url
	onSendEmail = () => {
		const url = "https://training.softech.cloud/api/users/forgot-password";
		const data = {
			email: "dinhhbt13121999@gmail.com",
		};
		axios
			.post(url, data)
			.then((response) => {
				console.log(response.data);
				if (response.data.success) {
					Alert.alert("Check your email inbox");
				} else {
					Alert.alert("Invalid email");
				}
			})
			.catch((error) => {
				console.log(error);
			});
	};
}

const styles = StyleSheet.create({
	header: {
		width: WIDTH - (92 + 92),
		height: 60,
		top: 48,
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
	},
	welcomeText: {
		width: WIDTH - 40 * 2,
		height: 30,
		top: 60,
		right: 50,
		justifyContent: "center",
		alignContent: "center",
		alignItems: "center",
	},
	email: {
		position: "absolute",
		width: WIDTH - 24 * 2,
		height: 81,
		top: 252,
		left: 24,
	},
	emailInput: {
		width: WIDTH - 24 * 2,
		height: 56,
		top: 20,
		borderRadius: 8,
		backgroundColor: "#F5F5F8",
	},
	sendEmailContainer: {
		width: WIDTH - 24 * 2,
		height: 56,
		top: 320,
		left: 24,
	},
	sendEmailButton: {
		width: WIDTH - 24 * 2,
		height: 56,
		borderRadius: 8,
		backgroundColor: "#FF6C44",
		justifyContent: "center",
		alignItems: "center",
	},
	sendEmailText: {
		fontSize: 18,
		fontWeight: "normal",
		color: "white",
	},
});
