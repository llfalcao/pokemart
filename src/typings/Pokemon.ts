export interface Sprite {
  sprites: string;
}

export interface Stat {
  base_stat: number;
}

export default interface Pokemon {
  id: number;
  name: string;
  pokemon_v2_pokemonsprites: Sprite[];
  pokemon_v2_pokemonstats: Stat[];
}
