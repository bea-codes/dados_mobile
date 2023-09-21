import { StatusBar } from "expo-status-bar";
import styled from "styled-components/native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "./screens/HomeScreen";
import HistoricoScreen from "./screens/HistoricoScreen";
import { useContext, useReducer, createContext } from "react";
import { Alert } from "react-native";

const Stack = createNativeStackNavigator();

const globalState = { partidas: [] };
export const GlobalContext = createContext();

const reducer = (state, action) => {
	switch (action.type) {
		case "jogada":
			return ({ partidas: [...state.partidas, { resultado: action.resultado, data: action.data}] });
	}
};

export default function App() {
	const [state, dispatch] = useReducer(reducer, globalState);
	return (
		<GlobalContext.Provider value={{ state, dispatch }}>
			<NavigationContainer>
				<Stack.Navigator>
					<Stack.Screen name="Home" component={HomeScreen} />
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
