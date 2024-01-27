export interface Sprite {
  sprites: {
    other: {
      home: SpriteVariation;
      dream_world: SpriteVariation;
      "official-artwork": SpriteVariation;
      showdown: SpriteVariation;
    };
  };
}

interface SpriteVariation {
  front_default: string | null;
  front_female: string | null;
  front_shiny: string | null;
  front_shiny_female: string | null;
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
