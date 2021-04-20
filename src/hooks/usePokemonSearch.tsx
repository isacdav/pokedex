import { useEffect, useRef, useState } from 'react';
import { pokeApi } from '../api/pokeApi';
import { mapShortToSingleList } from '../helpers/pokemonHelper';
import { IResponseList, ISinglePokemon } from '../interfaces/pokeInterfaces';

export const usePokemonSearch = () => {
  const [isFetching, setIsFetching] = useState(true);
  const [pokemonList, setPokemonList] = useState<ISinglePokemon[]>([]);

  const loadPokemonList = async () => {
    const resp = await pokeApi.get<IResponseList>(
      'https://pokeapi.co/api/v2/pokemon?limit=1500'
    );

    const searchResults = mapShortToSingleList(resp.data.results);

    setPokemonList(searchResults);
    setIsFetching(false);
  };

  useEffect(() => {
    loadPokemonList();
  }, []);

  return {
    isFetching,
    pokemonList,
  };
};
