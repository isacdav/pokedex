import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { ISinglePokemon } from '../interfaces/pokeInterfaces';
import TabNavigator from './TabNavigator';

export type RootStackParams = {
  Home: undefined;
  Search: undefined;
  Pokemon: {
    singlePokemon: ISinglePokemon;
    bgColor: string;
  };
};

const MainNavigator = () => {
  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  );
};

export default MainNavigator;
