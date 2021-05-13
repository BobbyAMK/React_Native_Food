import React from "react";
import { View, Text, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
const url = "https://training.softech.cloud/api/users/login";
// hook for getting email and password verify
export default () => {
	const navigation = useNavigation();
	const [loading, setLoading] = React.useState(false);
	const [success, setSuccess] = React.useState(false);
	// getting data from API and sign in onpress
	const signIn = (email, password, saveMe) => {
		setLoading(true);
		axios
			.post(url, { email, password })
			.then((response) => {
				if (response.data.ok) {
					console.log(response.data);
					console.log("Done");
					setSuccess(true);
					navigation.navigate("HomeScreen");
					// save to storage
					// code here ...
				} else {
					console.log(response.data);
					console.log("False");
					setSuccess(false);
					console.log(success);
				}
				setLoading(false);
			})
			.catch((error) => {
				console.log(error);
				setLoading(false);
				setSuccess(false);
			});
	};

	return [loading, success, signIn];
};
