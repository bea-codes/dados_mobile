import { View, Text, Pressable } from "react-native";
import styled from "styled-components/native";

const Botao = ({ text, navigation }) => {
	return (
		<BotaoPressable onPress={() => navigation.navigate("Historico")}>
			<BotaoText> {text}</BotaoText>
		</BotaoPressable>
	);
};

export default Botao;
