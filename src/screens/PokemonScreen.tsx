import React from 'react';
import { ActivityIndicator, Image, StyleSheet, Text, View } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { RootStackParams } from '../navigation/MainNavigator';
import { FadeInImage } from '../components/FadeInImage';
import { usePokemon } from '../hooks/usePokemon';
import BackButton from '../components/BackButton';
import PokemonDetails from '../components/PokemonDetails';

interface IProps extends StackScreenProps<RootStackParams, 'Pokemon'> {}

const PokemonScreen = ({ navigation, route }: IProps) => {
  const { singlePokemon, bgColor } = route.params;

  const { top } = useSafeAreaInsets();
  const { isLoading, pokemon: fullPokemon } = usePokemon(singlePokemon.id);

  return (
    <View style={{ flex: 1 }}>
      <View style={{ ...styles.headerContainer, backgroundColor: bgColor }}>
        <BackButton
          onPress={() => navigation.pop()}
          style={{ ...styles.backBtn, top: top + 10 }}
        />
        <View
          style={{
            ...styles.nameContainer,
            top: top + 40,
          }}>
          <Text style={styles.pokemonName}>
            {singlePokemon.name + ' '}
            <Text style={styles.pokemonNum}>#{singlePokemon.id}</Text>
          </Text>
        </View>
        <Image
          source={require('../assets/wpokeball.png')}
          style={styles.pokeball}
        />
        <FadeInImage uri={singlePokemon.picture} style={styles.pokemonImg} />
      </View>

      {isLoading ? (
        <View style={styles.activityIndicatorContainer}>
          <ActivityIndicator color={bgColor} size={65} />
        </View>
      ) : (
        <PokemonDetails pokemon={fullPokemon} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    height: 340,
    zIndex: 999,
    alignItems: 'center',
    borderBottomRightRadius: 1000,
    borderBottomLeftRadius: 1000,
  },
  backBtn: {
    position: 'absolute',
    left: 5,
  },
  nameContainer: {
    alignSelf: 'flex-start',
    left: 10,
  },
  pokemonNum: {
    color: 'white',
    fontSize: 25,
  },
  pokemonName: {
    color: 'white',
    fontSize: 40,
    textTransform: 'capitalize',
  },
  pokeball: {
    width: 250,
    height: 250,
    bottom: -40,
    opacity: 0.6,
  },
  pokemonImg: {
    position: 'absolute',
    width: 250,
    height: 250,
    bottom: -15,
  },
  activityIndicatorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignSelf: 'center',
  },
});

export default PokemonScreen;
