import { Sprite, Stat } from "../typings/Pokemon";

export const getPrice = (stats: Stat[]) => {
  return (
    (stats.reduce((sum, current) => sum + current.base_stat, 0) /
      stats.length) *
    10
  ).toFixed(2);
};

export const getImages = (spriteArray: Sprite[]) => {
  const images = JSON.parse(spriteArray[0].sprites);
  const fallback =
    images.other["official-artwork"].front_default ??
    "/unknown-pokemon.webp";
  const defaultImage = images.other.home.front_default ?? fallback;
  const hoverImage = images.other.home.front_shiny ?? fallback;

  return { defaultImage, hoverImage };
};
