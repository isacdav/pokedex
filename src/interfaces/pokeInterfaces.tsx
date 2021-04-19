export interface IResponseList {
  count: number;
  next: string;
  previous: null;
  results: IShortPokemon[];
}

export interface IShortPokemon {
  name: string;
  url: string;
}

export interface ISinglePokemon {
  id: string;
  name: string;
  picture: string;
  color?: string;
}
