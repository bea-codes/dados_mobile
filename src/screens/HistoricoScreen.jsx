import { useContext } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import styled from "styled-components/native";

import { GlobalContext } from "../../globalContext";

const HistoricoScreen = () => {
	const stateContext = useContext(GlobalContext);

	return (
		<HistoricoWrapper>
			<Historico
				data={stateContext.state.partidas}
				renderItem={({ item }) => (
					<Item date={item.data} resultado={item.resultado} />
				)}
				keyExtractor={(item) => item.id}
			/>
		</HistoricoWrapper>
	);
};

const HistoricoWrapper = styled.View`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 100%;
`;

const Historico = styled.FlatList`
	width: 100%;
	height: 100%;
`;

const Item = ({ date, resultado }) => {
	return (
		<ItemWrapper>
			<ItemDate>{date}</ItemDate>
			<ItemText>{resultado}</ItemText>
		</ItemWrapper>
	);
};

const ItemWrapper = styled.View`
	display: flex;
	align-items: flex-start;
	justify-content: center;
	padding-left: 20px;
	margin-left: 20px;
	margin-top: 10px;
	width: 90%;
	height: 75px;
	border-radius: 5px;
	background-color: #4660d5;
`;

const ItemText = styled.Text`
	color: white;
	font-size: 18px;
`;

const ItemDate = styled.Text`
	color: white;
	font-size: 12px;
	font-style: italic;
`;

export default HistoricoScreen;
