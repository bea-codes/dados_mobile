import { View, Text, Button } from 'react-native'
import React, { useState } from 'react'
import styled from 'styled-components/native'

const HomeScreen = () => {
    const [resultado, setResultado] = useState('');

    return (
        <HomeWrapper>
            <Text> {resultado} </Text>
            <Dados>
                <Dado source={require('../assets/Alea_1.png')}></Dado>
                <Dado source={require('../assets/Alea_1.png')}></Dado>

            </Dados>
            <Button title='JOGAR' />
            <Button title='RESULTADO' />

        </HomeWrapper>
    )
}

const HomeWrapper = styled.View`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
`

const Dados = styled.View`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 400px;
    height: 300px;
    border: 1px solid black;
`

const Dado = styled.Image`
    width: 21px;
    height: 17px;
`

export default HomeScreen