import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import PokemonScreen from '../screens/PokemonScreen';
import { RootStackParams } from './MainNavigator';

const Stack = createStackNavigator<RootStackParams>();

const PokemonNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: { backgroundColor: 'white' },
      }}>
      <Stack.Screen name='Home' component={HomeScreen} />
      <Stack.Screen name='Pokemon' component={PokemonScreen} />
    </Stack.Navigator>
  );
};

export default PokemonNavigator;
