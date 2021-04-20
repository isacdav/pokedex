import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ActivityIndicator,
  FlatList,
  Dimensions,
} from 'react-native';
import PokemonCard from '../components/PokemonCard';
import SearchInput from '../components/SearchInput';
import { usePokemonSearch } from '../hooks/usePokemonSearch';
import { ISinglePokemon } from '../interfaces/pokeInterfaces';

const { width: screenWidth } = Dimensions.get('window');

const SearchScreen = () => {
  const [searchTerm, setSearchTerm] = useState('initialState');
  const [filteredPokemon, setFilteredPokemon] = useState<ISinglePokemon[]>([]);
  const { isFetching, pokemonList } = usePokemonSearch();

  useEffect(() => {
    if (searchTerm.length === 0) {
      return setFilteredPokemon([]);
    }

    if (isNaN(Number(searchTerm))) {
      setFilteredPokemon(
        pokemonList.filter(poke =>
          poke.name.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    } else {
      const pokemonById = pokemonList.find(poke => poke.id === searchTerm);
      setFilteredPokemon(pokemonById ? [pokemonById] : []);
    }
  }, [searchTerm]);

  if (isFetching) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size={50} color='grey' />
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <SearchInput
        onDebounce={value => setSearchTerm(value)}
        style={styles.searchInput}
      />
      <FlatList
        data={filteredPokemon}
        renderItem={({ item }) => <PokemonCard pokemon={item} size='large' />}
        showsVerticalScrollIndicator={false}
        onEndReachedThreshold={0.4}
        ListHeaderComponent={<View style={styles.topSpace} />}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 20,
  },
  searchInput: {
    position: 'absolute',
    zIndex: 999,
    width: screenWidth - 40,
    top: 10,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  topSpace: {
    marginTop: 70,
  },
});

export default SearchScreen;
