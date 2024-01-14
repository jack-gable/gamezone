import React from "react";
import {
	Text,
	View,
	FlatList,
	TouchableOpacity,
	Modal,
	StyleSheet,
	TouchableWithoutFeedback,
	Keyboard,
} from "react-native";
import { globalStyles } from "../styles/global";
import Card from "../components/Card";
import { MaterialIcons } from "@expo/vector-icons";
import ReviewForm from "./reviewForm";

export default function Home({ navigation }) {
	const [isModalOpen, setIsModalOpen] = React.useState(false);
	const [reviews, setReviews] = React.useState([
		{
			title: "Zelda, Breath of the Wild",
			rating: 5,
			body: "lorem ipsum",
			key: 1,
		},
		{ title: "Pokemon Silver", rating: 4, body: "lorem ipsum", key: 2 },
		{ title: "Final Fantasy", rating: 3, body: "lorem ipsum", key: 3 },
	]);

	function addReview(review) {
		review.key = Math.random();
		setReviews((prevReviews) => {
			return [review, ...prevReviews];
		});
		setIsModalOpen(false);
	}

	return (
		<View style={globalStyles.container}>
			<Modal visible={isModalOpen} animationType="slide">
				<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
					<View style={styles.modalContent}>
						<MaterialIcons
							name="close"
							size={24}
							onPress={() => setIsModalOpen(false)}
							style={{ ...styles.modalToggle, ...styles.modalClose }}
						/>
						<ReviewForm addReview={addReview} />
					</View>
				</TouchableWithoutFeedback>
			</Modal>
			<MaterialIcons
				name="add"
				size={24}
				onPress={() => setIsModalOpen(true)}
				style={styles.modalToggle}
			/>
			<FlatList
				data={reviews}
				renderItem={({ item }) => (
					<TouchableOpacity
						onPress={() => navigation.navigate("Review Details", item)}
					>
						<Card>
							<Text style={globalStyles.titleText}>{item.title}</Text>
						</Card>
					</TouchableOpacity>
				)}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	modalContent: {
		flex: 1,
	},
	modalToggle: {
		marginBottom: 10,
		borderWidth: 1,
		borderColor: "#f2f2f2",
		padding: 10,
		borderRadius: 10,
		alignSelf: "center",
	},
	modalClose: {
		marginTop: 20,
		marginBottom: 0,
	},
});
