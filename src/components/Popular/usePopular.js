import axios from "axios";
import React from "react";
const url = "https://training.softech.cloud/api/products/popular";

// hook for popular product
export default () => {
	const [popular, setPopular] = React.useState([]);
	const [refresh, setRefresh] = React.useState(0);
	const [loading, setLoading] = React.useState(true);
	const onRefresh = () => {
		setRefresh(refresh + 1);
	};
	// getting data of product from API
	React.useEffect(() => {
		axios
			.get(url)
			.then((result) => {
				setPopular(result.data.popular);
				console.log("Done");
				setLoading(false);
			})
			.catch((error) => {
				console.log(error);
			});
	}, [refresh]);
	return [onRefresh, popular];
};
