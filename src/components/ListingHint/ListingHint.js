import React, { Component } from "react";
import {
	Text,
	StyleSheet,
	View,
	TouchableOpacity,
	FlatList,
	Image,
} from "react-native";

import { icons, images, data } from "../../IconsAndImages";

export default class ListingHint extends Component {
	constructor(props) {
		super(props);
		this.state = {
			setSelectedHint: null,
			listing: data.listingHint,
		};
	}

	render() {
		return <View>{this.renderListingHint()}</View>;
	}

	onSelectedHint = (hint) => {
		let hintList = data.listingHint.filter((x) => x.name.includes(hint.id));
		this.setState({ listing: hintList });
		this.setState({ setSelectedHint: hint });
	};
	//* list of hint
	renderListingHint = () => {
		const renderItem = ({ item }) => {
			return (
				<TouchableOpacity
					key={item}
					style={{
						width: 100,
						height: 50,
						padding: 10,
						alignItems: "center",
						justifyContent: "flex-start",
						borderRadius: 25,
						marginRight: 10,
						flexDirection: "row",
					}}
					onPress={() => this.onSelectedHint(item)}>
					<Text
						style={{
							fontSize: 18,
							fontWeight: "500",
							color:
								this.state.setSelectedHint?.id == item.id ? "orange" : "black",
						}}>
						{item.name}
					</Text>
				</TouchableOpacity>
			);
		};
		{
			/*lists*/
		}
		return (
			<View style={{ padding: 20 }}>
				<FlatList
					data={data.listingHint}
					keyExtractor={(item, index) => "c-" + index}
					horizontal
					showsHorizontalScrollIndicator={false}
					renderItem={renderItem}
					contentContainerStyle={{
						justifyContent: "center",
						alignItems: "center",
					}}
				/>
			</View>
		);
	};
}
