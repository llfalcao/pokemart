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
  const backupImage = images.other["official-artwork"].front_default;
  const defaultImage = images.other.home.front_default ?? backupImage;
  const hoverImage = images.other.home.front_shiny ?? backupImage;

  return { defaultImage, hoverImage };
};
