import { IShortPokemon, ISinglePokemon } from '../interfaces/pokeInterfaces';

export const mapShortToSingleList = (
  shortPokeList: IShortPokemon[]
): ISinglePokemon[] => {
  const singlePokeList: ISinglePokemon[] = shortPokeList.map(
    ({ name, url }) => {
      const urlParts = url.split('/');
      const id = urlParts[urlParts.length - 2];
      const picture = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;

      return { id, picture, name };
    }
  );

  return singlePokeList;
};
