import { StatusBar } from 'expo-status-bar';
import styled from 'styled-components/native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import HistoricoScreen from './screens/HistoricoScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
<NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name='Home' component={HomeScreen}/>
      <Stack.Screen name='Historico' component={HistoricoScreen}/>
    </Stack.Navigator>
  <StatusBar style="auto" />
</NavigationContainer>
  );
}



