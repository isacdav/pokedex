import { useEffect, useRef, useState } from 'react';
import { pokeApi } from '../api/pokeApi';
import { mapShortToSingleList } from '../helpers/pokemonHelper';
import { IResponseList, ISinglePokemon } from '../interfaces/pokeInterfaces';

export const usePokemonList = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [pokemonList, setPokemonList] = useState<ISinglePokemon[]>([]);

  const nextPageUrl = useRef('https://pokeapi.co/api/v2/pokemon?limit=30');

  const loadPokemonList = async () => {
    setIsLoading(true);

    const resp = await pokeApi.get<IResponseList>(nextPageUrl.current);

    nextPageUrl.current = resp.data.next;
    const singlePokeList = mapShortToSingleList(resp.data.results);

    setPokemonList([...pokemonList, ...singlePokeList]);
    setIsLoading(false);
  };

  useEffect(() => {
    loadPokemonList();
  }, []);

  return {
    isLoading,
    pokemonList,
    loadPokemonList,
  };
};
