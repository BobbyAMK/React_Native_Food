import React, { Component } from "react";
import AppNavigator from "./src/navigator/AppNavigator";
import ReviewRider from "./src/components/ReviewRider/ReviewRider";
import AddTips from "./src/components/ReviewRider/AddTips";

export default class App extends Component {
	render() {
		return <AppNavigator />;
	}
}
