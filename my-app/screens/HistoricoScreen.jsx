import { View, Text } from 'react-native'
import styled from 'styled-components/native'

const HistoricoScreen = () => {
    return (
        <HistoricoWrapper>
            <Text>Historico</Text>
        </HistoricoWrapper>
    )
}

const HistoricoWrapper = styled.View`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
`

export default HistoricoScreen