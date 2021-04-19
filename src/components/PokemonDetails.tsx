import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { IFullPokemon } from '../interfaces/pokeInterfaces';
import { FadeInImage } from './FadeInImage';

interface IProps {
  pokemon: IFullPokemon;
}

const PokemonDetails = ({ pokemon }: IProps) => {
  return (
    <ScrollView
      style={{ ...StyleSheet.absoluteFillObject }}
      showsVerticalScrollIndicator={false}>
      <View style={{ ...styles.container, marginTop: 345 }}>
        <Text style={styles.title}>Types</Text>
        <View style={styles.typesContainer}>
          {pokemon.types.map(({ type }) => (
            <Text style={{ ...styles.text, marginRight: 10 }} key={type.name}>
              {type.name}
            </Text>
          ))}
        </View>
        <Text style={styles.title}>Weight</Text>
        <Text style={styles.text}>{pokemon.weight / 10}kg</Text>
        <Text style={styles.title}>Height</Text>
        <Text style={{ ...styles.text, textTransform: 'lowercase' }}>
          {pokemon.height / 10}m
        </Text>
      </View>

      <View style={styles.container}>
        <Text style={styles.title}>Sprites</Text>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <FadeInImage
            uri={pokemon.sprites.front_default}
            style={styles.sprite}
          />
          <FadeInImage
            uri={pokemon.sprites.back_default}
            style={styles.sprite}
          />
          <FadeInImage
            uri={pokemon.sprites.front_shiny}
            style={styles.sprite}
          />
          <FadeInImage uri={pokemon.sprites.back_shiny} style={styles.sprite} />
        </ScrollView>
      </View>

      <View style={styles.container}>
        <Text style={styles.title}>Abilities</Text>
        <View style={styles.typesContainer}>
          {pokemon.abilities.map(({ ability }) => (
            <Text
              style={{ ...styles.text, marginRight: 10 }}
              key={ability.name}>
              {ability.name}
            </Text>
          ))}
        </View>
      </View>

      <View style={styles.container}>
        <Text style={styles.title}>Moves</Text>
        <View style={styles.movesContainer}>
          {pokemon.moves.map(({ move }) => (
            <Text style={{ ...styles.text, marginRight: 10 }} key={move.name}>
              {move.name}
            </Text>
          ))}
        </View>
      </View>

      <View style={styles.container}>
        <Text style={styles.title}>Stats</Text>
        <View>
          {pokemon.stats.map((info, i) => (
            <View key={info.stat.name + i} style={{ flexDirection: 'row' }}>
              <Text style={{ ...styles.text, marginRight: 10, width: 150 }}>
                {info.stat.name}
              </Text>
              <Text
                style={{ ...styles.text, marginRight: 10, fontWeight: 'bold' }}>
                {info.base_stat}
              </Text>
            </View>
          ))}
        </View>
      </View>

      <View style={styles.endContainer}>
        <FadeInImage
          uri={pokemon.sprites.front_default}
          style={styles.sprite}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
  },
  title: {
    fontSize: 20,
    marginTop: 20,
    fontWeight: 'bold',
  },
  text: {
    fontSize: 17,
    textTransform: 'capitalize',
  },
  typesContainer: {
    flexDirection: 'row',
  },
  movesContainer: {
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
  sprite: {
    width: 100,
    height: 100,
  },
  endContainer: {
    marginBottom: 10,
    alignItems: 'center',
  },
});

export default PokemonDetails;
