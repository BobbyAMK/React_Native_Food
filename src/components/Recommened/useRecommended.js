import React, { Component } from "react";
import axios from "axios";
const url = "https://training.softech.cloud/api/products/recommended";

// Hooks for recommended product
export default () => {
	const [recommended, setRecommended] = React.useState([]);
	const [loading, setLoading] = React.useState(true);
	const [refresh, setRefresh] = React.useState(0);
	const onRefresh = () => {
		setRefresh(refresh + 1);
	};
	// getting product info from API
	React.useEffect(() => {
		setLoading(true);
		axios
			.get(url)
			.then((response) => {
				recommended: response.data;
				setLoading(false);
				console.log(response);
			})
			.catch((error) => {
				console.log(error);
			});
	}, [refresh]);
	return [loading, onRefresh, recommended];
};
