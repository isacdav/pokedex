import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { Platform } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import PokemonNavigator from './PokemonNavigator';
import SearchNavigator from './SearchNavigator';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      sceneContainerStyle={{ backgroundColor: 'white' }}
      tabBarOptions={{
        activeTintColor: '#ca3033',
        labelStyle: {
          marginBottom: Platform.OS === 'ios' ? 0 : 10,
        },
        style: {
          position: 'absolute',
          backgroundColor: 'rgba(255,255,255,0.9)',
          borderWidth: 0,
          elevation: 0,
          height: Platform.OS === 'ios' ? 80 : 60,
        },
      }}>
      <Tab.Screen
        name='PokeTab'
        component={PokemonNavigator}
        options={{
          tabBarLabel: 'Pokemon List',
          tabBarIcon: ({ color }) => (
            <Icon name='list-outline' color={color} size={25} />
          ),
        }}
      />
      <Tab.Screen
        name='SearchTab'
        component={SearchNavigator}
        options={{
          tabBarLabel: 'Search',
          tabBarIcon: ({ color }) => (
            <Icon name='search-outline' color={color} size={25} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
