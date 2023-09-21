import { Alert, Text } from "react-native";
import { useState, useReducer, useContext } from "react";
import styled from "styled-components/native";

import DiceOne from "../assets/Alea_1.png";
import DiceTwo from "../assets/Alea_2.png";
import DiceThree from "../assets/Alea_3.png";
import DiceFour from "../assets/Alea_4.png";
import DiceFive from "../assets/Alea_5.png";
import DiceSix from "../assets/Alea_6.png";

import { GlobalContext } from "../App";

const HomeScreen = ({ navigation }) => {
	const stateContext = useContext(GlobalContext);

	const [dado1, setDado1] = useState(DiceOne);
	const [dado2, setDado2] = useState(DiceThree);

	const jogar = () => {
		let dado1 = Math.floor(Math.random() * 6) + 1;
		let dado2 = Math.floor(Math.random() * 6) + 1;
		let data = new Date().toString();

		switch (dado1) {
			case 1:
				setDado1(DiceOne);
				break;
			case 2:
				setDado1(DiceTwo);
				break;
			case 3:
				setDado1(DiceThree);
				break;
			case 4:
				setDado1(DiceFour);
				break;
			case 5:
				setDado1(DiceFive);
				break;
			case 6:
				setDado1(DiceSix);
				break;
			default:
				setDado1(DiceFour);
				break;
		}

		switch (dado2) {
			case 1:
				setDado2(DiceOne);
				break;
			case 2:
				setDado2(DiceTwo);
				break;
			case 3:
				setDado2(DiceThree);
				break;
			case 4:
				setDado2(DiceFour);
				break;
			case 5:
				setDado2(DiceFive);
				break;
			case 6:
				setDado2(DiceSix);
				break;
			default:
				setDado2(DiceFour);
				break;
		}

		let resultado = dado1 + dado2;
		if (resultado >= 7) {
			stateContext.dispatch({
				type: "jogada",
				resultado: "venceu",
				data,
			});
			// Alert.alert("Venceu!", "vc venceu oba :)");
		}

		if (resultado < 7) {
			stateContext.dispatch({
				type: "jogada",
				resultado: "perdeu",
				data,
			});
			// Alert.alert("Perdeu!", "vc perdeu aff :(");
		}
	};

	return (
		<HomeWrapper>
			<Text> Resultado aqui </Text>

			<Dados>
				<Dado source={dado1}></Dado>
				<Dado source={dado2}></Dado>
			</Dados>

			<BotoesView>
				<BotaoPressable onPress={jogar}>
					<BotaoText>JOGAR</BotaoText>
				</BotaoPressable>
				<BotaoPressable
					onPress={() => navigation.navigate("Historico")}
				>
					<BotaoText>HISTORICO</BotaoText>
				</BotaoPressable>
			</BotoesView>
		</HomeWrapper>
	);
};

const HomeWrapper = styled.View`
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 50px;
	width: 100%;
	height: 100%;
`;

const Dados = styled.View`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-around;
	width: 400px;
	height: 500px;
	border: 1px solid black;
	border-radius: 20px;
`;

const Dado = styled.Image``;

const BotoesView = styled.View`
	display: flex;
	width: 300px;
	height: 200px;
	align-items: center;
	justify-content: space-around;
`;

const BotaoPressable = styled.Pressable`
	width: 150px;
	height: 50px;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: blueviolet;
	border-radius: 15px;
`;

const BotaoText = styled.Text`
	color: white;
`;

export default HomeScreen;
