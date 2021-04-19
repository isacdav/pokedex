import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import PokemonScreen from '../screens/PokemonScreen';
import { ISinglePokemon } from '../interfaces/pokeInterfaces';

export type RootStackParams = {
  Home: undefined;
  Pokemon: {
    singlePokemon: ISinglePokemon;
    bgColor: string;
  };
};

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
