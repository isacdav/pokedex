import React, { useEffect, useRef, useState } from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { ISinglePokemon } from '../interfaces/pokeInterfaces';
import { FadeInImage } from './FadeInImage';
import { getImageBgColor } from '../helpers/colorHelper';
import { useNavigation } from '@react-navigation/core';

const winWith = Dimensions.get('window').width;

interface IProps {
  pokemon: ISinglePokemon;
  size?: 'medium' | 'large';
}

const PokemonCard = ({ pokemon, size = 'medium' }: IProps) => {
  const [bgColor, setBgColor] = useState('grey');
  const isMounted = useRef(true);
  const navigation = useNavigation();

  useEffect(() => {
    setBackgroundColor();
    return () => {
      isMounted.current = false;
    };
  }, []);

  const setBackgroundColor = async () => {
    const { backgroundColor } = await getImageBgColor(pokemon.picture);
    if (!isMounted.current) return;
    setBgColor(backgroundColor);
  };

  const handleCardPress = () => {
    navigation.navigate('Pokemon', { singlePokemon: pokemon, bgColor });
  };

  return (
    <TouchableOpacity activeOpacity={0.9} onPress={handleCardPress}>
      <View
        style={{
          ...styles.cardContainer,
          backgroundColor: bgColor,
          width: size === 'medium' ? winWith * 0.4 : winWith * 0.8,
          marginHorizontal: size === 'medium' ? 10 : winWith * 0.05,
          height: size === 'medium' ? 120 : 90,
        }}>
        <View>
          <Text style={styles.name}>
            {pokemon.name}
            {'\n#' + pokemon.id}
          </Text>
        </View>
        <View style={styles.pokeballContainer}>
          <Image
            source={require('../assets/wpokeball.png')}
            style={styles.pokeballImg}
          />
        </View>
        <FadeInImage uri={pokemon.picture} style={styles.pokemonImage} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    marginBottom: 25,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 8,
  },
  name: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
    top: 20,
    left: 10,
    textTransform: 'capitalize',
  },
  pokeballContainer: {
    width: 100,
    height: 100,
    position: 'absolute',
    bottom: 0,
    right: 0,
    overflow: 'hidden',
    opacity: 0.6,
  },
  pokeballImg: {
    width: 100,
    height: 100,
    position: 'absolute',
    bottom: -25,
    right: -25,
  },
  pokemonImage: {
    width: 120,
    height: 120,
    position: 'absolute',
    right: -8,
    bottom: -5,
  },
});

export default PokemonCard;
