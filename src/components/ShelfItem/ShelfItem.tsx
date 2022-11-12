import Pokemon from "../../typings/Pokemon";
import ProductImage from "../ProductImage/ProductImage";

interface Props {
  pokemon: Pokemon;
}

const ShelfItem = ({ pokemon }: Props) => {
  const {
    name: lowerName,
    pokemon_v2_pokemonstats: stats,
    pokemon_v2_pokemonsprites,
  } = pokemon;

  const name = lowerName.substring(0, 1).toUpperCase() + lowerName.slice(1);

  const price = (
    (stats.reduce((sum, current) => sum + current.base_stat, 0) /
      stats.length) *
    10
  ).toFixed(2);

  return (
    <li className="product">
      <a className="product__link" href="#!">
        <ProductImage sprites={pokemon_v2_pokemonsprites[0].sprites} />
        <p>{name}</p>
        <span>{price}</span>
      </a>
    </li>
  );
};

export default ShelfItem;
