import React from 'react';
import {
  ActivityIndicator,
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import PokemonCard from '../components/PokemonCard';
import { usePokemonList } from '../hooks/usePokemonList';
import { appStyles } from '../styles/appStyles';

const HomeScreen = () => {
  const { top } = useSafeAreaInsets();

  const { pokemonList, loadPokemonList } = usePokemonList();

  return (
    <View>
      <Image
        source={require('../assets/bpokeball.png')}
        style={appStyles.backgroundPokeball}
      />
      <View style={styles.listContainer}>
        <FlatList
          data={pokemonList}
          renderItem={({ item }) => <PokemonCard pokemon={item} />}
          numColumns={2}
          showsVerticalScrollIndicator={false}
          onEndReached={loadPokemonList}
          onEndReachedThreshold={0.4}
          ListHeaderComponent={
            <Text
              style={{
                ...styles.title,
                top: top + 20,
                marginBottom: top + 20,
              }}>
              Pokedex
            </Text>
          }
          ListFooterComponent={
            <ActivityIndicator
              color='grey'
              size={30}
              style={styles.activityIndicator}
            />
          }
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    ...appStyles.title,
    marginBottom: 20,
    paddingBottom: 20,
  },
  listContainer: {
    alignItems: 'center',
  },
  activityIndicator: {
    height: 100,
  },
});

export default HomeScreen;
