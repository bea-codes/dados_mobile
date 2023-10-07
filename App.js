import { StatusBar } from "expo-status-bar";
import styled from "styled-components/native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import uuid from "react-native-uuid";
import HomeScreen from "./src/screens/HomeScreen";
import HistoricoScreen from "./src/screens/HistoricoScreen";
import { globalState, GlobalContext } from "./globalContext";
import { useContext, useReducer } from "react";
import { Alert } from "react-native";

const Stack = createNativeStackNavigator();

const reducer = (state, action) => {
	switch (action.type) {
		case "jogada":
			return {
				partidas: [
					...state.partidas,
					{
						resultado: action.resultado,
						data: action.data,
						id: uuid.v4(),
					},
				],
			};
	}
};

export default function App() {
	const [state, dispatch] = useReducer(reducer, globalState);
	return (
		<GlobalContext.Provider value={{ state, dispatch }}>
			<NavigationContainer>
				<Stack.Navigator>
					<Stack.Screen
						name="Home"
						component={HomeScreen}
						options={{ headerShown: false }}
					/>
					<Stack.Screen
						name="Historico"
						component={HistoricoScreen}
					/>
				</Stack.Navigator>
				<StatusBar style="auto" />
			</NavigationContainer>
		</GlobalContext.Provider>
	);
}
