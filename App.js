import "react-native-gesture-handler";
import React from "react";
import { StyleSheet } from "react-native";
import AppLoading from "expo-app-loading";
import * as Font from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import {
	AboutStackNavigator,
	MainStackNavigator,
} from "./src/navigation/StackNavigator";

const Drawer = createDrawerNavigator();

const getFonts = () =>
	Font.loadAsync({
		"Nunito-regular": require("./assets/fonts/Nunito-Regular.ttf"),
		"Nunito-bold": require("./assets/fonts/Nunito-Bold.ttf"),
	});

export default function App() {
	const [fontsLoaded, setFontsLoaded] = React.useState(false);

	if (fontsLoaded) {
		return (
			<NavigationContainer>
				<Drawer.Navigator>
					<Drawer.Screen
						name="GameZone"
						component={MainStackNavigator}
						options={{ headerShown: false }}
					/>
					<Drawer.Screen
						name="About"
						component={AboutStackNavigator}
						options={{ headerShown: false }}
					/>
				</Drawer.Navigator>
			</NavigationContainer>
		);
	} else {
		return (
			<AppLoading
				startAsync={getFonts}
				onError={console.warn}
				onFinish={() => setFontsLoaded(true)}
			/>
		);
	}
}

const styles = StyleSheet.create({});
