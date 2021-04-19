import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import PokemonNavigator from './StackNavigator';

const MainNavigator = () => {
  return (
    <NavigationContainer>
      <PokemonNavigator />
    </NavigationContainer>
  );
};

export default MainNavigator;
