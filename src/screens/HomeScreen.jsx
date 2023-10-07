import { Text } from "react-native";
import { useState, useContext } from "react";
import styled from "styled-components/native";
import { diceImages } from "../images";

import { GlobalContext } from "../../globalContext";
import { useStore } from "../../zustand";

const HomeScreen = ({ navigation }) => {
	const stateContext = useContext(GlobalContext);
	const addJogada  = useStore((state) => state.addJogada);
	const [resultado, setResultado] = useState("");
	const [dado1, setDado1] = useState(0);
	const [dado2, setDado2] = useState(0);


	const rodarDado = () => {Math.floor(Math.random() * 6) + 1;};
	const jogar = () => {
		setDado1(rodarDado())
		setDado2(rodarDado())
		let data = new Date().toString();


		let resultado = dado1 + dado2;

		if (resultado >= 7) {
			addJogada({
				resultado: "Venceu",
				data
			})
			setResultado("Venceu!");
		}

		if (resultado < 7) {
			addJogada({
				resultado: "Perdeu",
				data
			})			
			setResultado("Perdeu!");
		}
	};


	return (
    <HomeWrapper>
      <Resultado> {resultado} </Resultado>

      <Dados>
        <Dado source={diceImages[dado1]}></Dado>
        <Dado source={diceImages[dado2]}></Dado>
      </Dados>

      <BotoesView>
        <BotaoPressable
          onPress={jogar}
        >
          <BotaoText>JOGAR</BotaoText>
        </BotaoPressable>
        <BotaoPressable onPress={() => navigation.navigate("Historico")}>
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

const Resultado = styled.Text`
	font-size: 24px;
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
	background-color: #4660d5;
	border-radius: 15px;
`;

const BotaoText = styled.Text`
	color: white;
`;

export default HomeScreen;
