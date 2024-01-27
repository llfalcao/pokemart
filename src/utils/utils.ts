import { Sprite, Stat } from "../typings/Pokemon";

export const getPrice = (stats: Stat[]) => {
  return (
    (stats.reduce((sum, current) => sum + current.base_stat, 0) /
      stats.length) *
    10
  ).toFixed(2);
};

export const getImages = (spriteArray: Sprite[]) => {
  const [{ sprites }] = spriteArray;
  const fallback =
    sprites.other["official-artwork"].front_default ?? "/unknown-pokemon.webp";
  const defaultImage = sprites.other.home.front_default ?? fallback;
  const hoverImage = sprites.other.home.front_shiny ?? fallback;

  return { defaultImage, hoverImage };
};
