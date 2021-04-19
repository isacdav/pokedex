import { useEffect, useState } from 'react';
import { pokeApi } from '../api/pokeApi';
import { IFullPokemon } from '../interfaces/pokeInterfaces';

export const usePokemon = (id: string) => {
  const [isLoading, setIsLoading] = useState(true);
  const [pokemon, setPokemon] = useState<IFullPokemon>({} as IFullPokemon);

  useEffect(() => {
    loadPokemon();
  }, []);

  const loadPokemon = async () => {
    const resp = await pokeApi.get<IFullPokemon>(
      `https://pokeapi.co/api/v2/pokemon/${id}`
    );
    setPokemon(resp.data);
    setIsLoading(false);
  };

  return { isLoading, pokemon };
};
