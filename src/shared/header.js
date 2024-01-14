import { Image, StyleSheet, Text, View, ImageBackground } from "react-native";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";

export default function Header({ navigation, title }) {
	const openMenu = () => {
		navigation.openDrawer();
	};

	return (
		<ImageBackground
			source={require("../../assets/game_bg.png")}
			style={styles.header}
		>
			<MaterialIcons
				style={styles.icon}
				name="menu"
				size={28}
				onPress={openMenu}
			/>
			<View style={styles.headerTitle}>
				<Image
					style={styles.headerImg}
					source={require("../../assets/heart_logo.png")}
				/>
				<Text style={styles.headerText}>{title}</Text>
			</View>
		</ImageBackground>
	);
}

const styles = StyleSheet.create({
	header: {
		width: "100%",
		height: "100%",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
	},
	headerText: {
		fontWeight: "bold",
		fontSize: 20,
		color: "#333",
		letterSpacing: 1,
	},
	icon: {
		position: "absolute",
		left: 0,
	},
	headerTitle: {
		flexDirection: "row",
	},
	headerImg: {
		width: 26,
		height: 26,
		marginHorizontal: 10,
	},
});
