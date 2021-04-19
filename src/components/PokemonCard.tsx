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
import ImageColors from 'react-native-image-colors';
import { getImageBgColor } from '../helpers/colorHelper';

const winWith = Dimensions.get('window').width;

interface IProps {
  pokemon: ISinglePokemon;
}

const PokemonCard = ({ pokemon }: IProps) => {
  const [bgColor, setBgColor] = useState('grey');
  const isMounted = useRef(true);

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

  return (
    <TouchableOpacity activeOpacity={0.9}>
      <View style={{ ...styles.cardContainer, backgroundColor: bgColor }}>
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
    marginHorizontal: 10,
    height: 120,
    width: winWith * 0.4,
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
