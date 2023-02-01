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
  const prefix = "https://raw.githubusercontent.com/PokeAPI/sprites";

  Object.keys(images.other).forEach((key) => {
    if (typeof images.other[key].front_default === "string") {
      images.other[key].front_default =
        prefix + images.other[key].front_default.replace("/media", "/master");
    }
    if (typeof images.other[key].front_shiny === "string") {
      images.other[key].front_shiny =
        prefix + images.other[key].front_shiny.replace("/media", "/master");
    }
  });

  const fallback =
    images.other["official-artwork"].front_default ?? "/unknown-pokemon.webp";
  const defaultImage = images.other.home.front_default ?? fallback;
  const hoverImage = images.other.home.front_shiny ?? fallback;

  return { defaultImage, hoverImage };
};
