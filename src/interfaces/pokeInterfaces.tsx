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

export interface IFullPokemon {
  abilities: IAbility[];
  base_experience: number;
  forms: ISpecies[];
  game_indices: IGameIndex[];
  height: number;
  held_items: any[];
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  moves: IMove[];
  name: string;
  order: number;
  past_types: any[];
  species: ISpecies;
  sprites: ISprites;
  stats: IStat[];
  types: IType[];
  weight: number;
}

export interface IAbility {
  ability: ISpecies;
  is_hidden: boolean;
  slot: number;
}

export interface ISpecies {
  name: string;
  url: string;
}

export interface IGameIndex {
  game_index: number;
  version: ISpecies;
}

export interface IMove {
  move: ISpecies;
  version_group_details: IVersionGroupDetail[];
}

export interface IVersionGroupDetail {
  level_learned_at: number;
  move_learn_method: ISpecies;
  version_group: ISpecies;
}

export interface IGenerationV {
  'black-white': ISprites;
}

export interface IGenerationIv {
  'diamond-pearl': ISprites;
  'heartgold-soulsilver': ISprites;
  platinum: ISprites;
}

export interface IVersions {
  'generation-i': IGenerationI;
  'generation-ii': IGenerationIi;
  'generation-iii': IGenerationIii;
  'generation-iv': IGenerationIv;
  'generation-v': IGenerationV;
  'generation-vi': { [key: string]: IGenerationVi };
  'generation-vii': IGenerationVii;
  'generation-viii': IGenerationViii;
}

export interface ISprites {
  back_default: string;
  back_female: null;
  back_shiny: string;
  back_shiny_female: null;
  front_default: string;
  front_female: null;
  front_shiny: string;
  front_shiny_female: null;
  other?: IOther;
  versions?: IVersions;
  animated?: ISprites;
}

export interface IGenerationI {
  'red-blue': IRedBlue;
  yellow: IRedBlue;
}

export interface IRedBlue {
  back_default: string;
  back_gray: string;
  front_default: string;
  front_gray: string;
}

export interface IGenerationIi {
  crystal: ICrystal;
  gold: ICrystal;
  silver: ICrystal;
}

export interface ICrystal {
  back_default: string;
  back_shiny: string;
  front_default: string;
  front_shiny: string;
}

export interface IGenerationIii {
  emerald: IEmerald;
  'firered-leafgreen': ICrystal;
  'ruby-sapphire': ICrystal;
}

export interface IEmerald {
  front_default: string;
  front_shiny: string;
}

export interface IGenerationVi {
  front_default: string;
  front_female: null;
  front_shiny: string;
  front_shiny_female: null;
}

export interface IGenerationVii {
  icons: IDreamWorld;
  'ultra-sun-ultra-moon': IGenerationVi;
}

export interface IDreamWorld {
  front_default: string;
  front_female: null;
}

export interface IGenerationViii {
  icons: IDreamWorld;
}

export interface IOther {
  dream_world: IDreamWorld;
  'official-artwork': IOfficialArtwork;
}

export interface IOfficialArtwork {
  front_default: string;
}

export interface IStat {
  base_stat: number;
  effort: number;
  stat: ISpecies;
}

export interface IType {
  slot: number;
  type: ISpecies;
}
