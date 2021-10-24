import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen'
import DoctorHomeScreen from './src/screens/DoctorHomeScreen'
import Consultation from './src/screens/ConsultationScreen'
import NurseHomeScreen from './src/screens/NurseHomeScreen'
import VaccinationScreen from './src/screens/VaccinationScreen'


const Stack = createNativeStackNavigator();

function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={HomeScreen}
                          options={{ headerTitle: props => "Página Inicial" }}
            />
            <Stack.Screen name="DoctorHome" component={DoctorHomeScreen}
                          options={{ headerTitle: props => "Médico" }}
            />
            <Stack.Screen name="Consultation" component={Consultation}
                          options={{ headerTitle: props => "Consulta" }}
            />
            <Stack.Screen name="NurseHome" component={NurseHomeScreen}
                          options={{ headerTitle: props => "Enfermeira" }}
            />
            <Stack.Screen name="Vaccination" component={VaccinationScreen}
                          options={{ headerTitle: props => "Cartão de Vacina" }}
            />
        </Stack.Navigator>
      </NavigationContainer>
  );
}

export default App;
