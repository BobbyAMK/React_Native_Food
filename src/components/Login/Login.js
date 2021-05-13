import React from "react";
import {
	StyleSheet,
	Text,
	View,
	TouchableOpacity,
	Dimensions,
	TextInput,
	Switch,
	Image,
} from "react-native";
import { icons, images } from "../../IconsAndImages";
import useEmailPassword from "./useEmailPassword";

export default function Login({ navigation }) {
	{
		/*useState for email and password*/
	}
	const [loading, success, signIn] = useEmailPassword();
	const [email, setEmail] = React.useState(null);
	const [password, setPassword] = React.useState(null);

	return (
		<View style={{ flex: 1 }}>
			{/*header*/}
			<View style={styles.header}>
				<Image source={icons.eatmelogo} style={styles.logo} />
				<View style={styles.logoText}>
					<Text style={styles.headerText}>E a t m e</Text>
				</View>
				<Text style={{ fontSize: 30, fontWeight: "bold", top: 40 }}>
					Let's Sign You In
				</Text>
				<View style={styles.welcomeText}>
					<Text style={{ fontSize: 16, fontWeight: "normal" }}>
						Welcome back, you’ve been missed!
					</Text>
				</View>
			</View>
			{/*email field*/}
			<View style={styles.email}>
				<Text style={{ fontSize: 14, top: 1, left: 0 }}>Email</Text>
				<View style={styles.emailInput}>
					<TextInput
						autoCapitalize="none"
						autoCorrect={false}
						keyboardType="email-address"
						placeholder="Enter your Email"
						value={email}
						onChangeText={(text) => {
							setEmail(text);
						}}
					/>
				</View>
			</View>
			{/*password field*/}
			<View style={styles.password}>
				<Text style={{ fontSize: 16, fontWeight: "normal", top: 40 }}>
					Password
				</Text>
				<View style={styles.passWordInput}>
					<TextInput
						autoCapitalize="none"
						secureTextEntry={true}
						keyboardType="default"
						placeholder="Enter your Password"
						value={password}
						onChangeText={(text) => {
							setPassword(text);
						}}
					/>
				</View>
			</View>
			{/*to forgot password screen*/}
			<View style={styles.forgotPw}>
				<TouchableOpacity
					onPress={() => {
						navigation.navigate("Forgot");
					}}>
					<Text
						style={{
							fontSize: 14,
							width: 114,
							left: 37,
							fontWeight: "normal",
						}}>
						Forgot Password?
					</Text>
				</TouchableOpacity>
			</View>
			{/*sign in button*/}
			<View style={styles.signInContainer}>
				<TouchableOpacity
					style={styles.signInButton}
					onPress={() => {
						signIn(email, password, true);
					}}>
					<Text style={styles.signInText}>Sign In</Text>
				</TouchableOpacity>
			</View>
			<View style={styles.signUpContainer}>
				<Text style={{ fontSize: 14, fontWeight: "normal", color: "#898B9A" }}>
					Don't have an account?
				</Text>
				{/*to register screen*/}
				<TouchableOpacity
					style={{
						width: 56,
						height: 20,
						marginLeft: 5,
					}}
					onPress={() => {
						navigation.navigate("Register");
					}}>
					<Text style={{ fontSize: 14, fontWeight: "500", color: "#FF6C44" }}>
						Sign Up
					</Text>
				</TouchableOpacity>
			</View>
			{/*sign in with facebook*/}
			<View style={styles.fbSignIn}>
				<TouchableOpacity style={styles.fbButton}>
					<Image source={icons.facebook} style={{ width: 20, height: 20 }} />
					<Text
						style={{
							fontSize: 16,
							fontWeight: "normal",
							color: "white",
							marginLeft: 5,
						}}>
						Continue with Facebook
					</Text>
				</TouchableOpacity>
			</View>
			{/*sign in with google*/}
			<View style={styles.ggSignIn}>
				<TouchableOpacity style={styles.ggButton}>
					<Image source={icons.google} style={{ width: 20, height: 20 }} />
					<Text
						style={{
							fontSize: 16,
							fontWeight: "normal",
							color: "black",
							marginLeft: 5,
						}}>
						Continue with Google
					</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
}

const WIDTH = Dimensions.get("screen").width;

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
		width: WIDTH - 71 * 2,
		height: 30,
		top: 60,
		right: 20,
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
	password: {
		position: "absolute",
		width: WIDTH - 24 * 2,
		height: 81,
		top: 320,
		left: 24,
	},
	passWordInput: {
		width: WIDTH - 24 * 2,
		height: 56,
		top: 50,
		borderRadius: 8,
		backgroundColor: "#F5F5F8",
	},
	toggleSaveMe: {
		width: WIDTH - (259 + 24),
		height: 20,
		top: 400,
		flexDirection: "row",
		left: 24,
	},
	forgotPw: {
		width: WIDTH - (24 + 237),
		height: 20,
		top: 384,
		marginLeft: 237,
	},
	signInContainer: {
		width: WIDTH - 24 * 2,
		height: 56,
		top: 410,
		left: 24,
	},
	signInButton: {
		width: WIDTH - 24 * 2,
		height: 56,
		borderRadius: 8,
		backgroundColor: "#FF6C44",
		justifyContent: "center",
		alignItems: "center",
	},
	signInText: {
		fontSize: 18,
		fontWeight: "normal",
		color: "white",
	},
	fbSignIn: {
		width: WIDTH - 24 * 2,
		height: 50,
		left: 24,
		top: 460,
	},
	fbButton: {
		width: WIDTH - 24 * 2,
		height: 50,
		backgroundColor: "#3C5A99",
		borderRadius: 8,
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
	},
	ggSignIn: {
		width: WIDTH - 24 * 2,
		height: 50,
		left: 24,
		top: 470,
	},
	ggButton: {
		width: WIDTH - 24 * 2,
		height: 50,
		backgroundColor: "#F5F5F8",
		borderRadius: 8,
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
	},
	signUpContainer: {
		width: WIDTH - 68 * 2,
		left: 68,
		height: 20,
		top: 425,
		flexDirection: "row",
		justifyContent: "center",
	},
});
