import Cart from "../../typings/Cart";
import Pokemon from "../../typings/Pokemon";
import ProductImage from "../ProductImage/ProductImage";

interface Props {
  pokemon: Pokemon;
}

const ShelfItem = ({ pokemon }: Props) => {
  const {
    id,
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

  const addToCart = () => {
    const product = { id, name, price, quantity: 1 };

    const cart: Cart = JSON.parse(
      localStorage.getItem("cart") ?? '{"items": []}',
    );

    const itemIndex = cart.items.findIndex((item) => item.id === id);

    if (itemIndex < 0) {
      cart.items.unshift({ id, name, price, quantity: 1 });
    } else {
      product.quantity += cart.items[itemIndex].quantity;
      cart.items[itemIndex] = product;
    }

    localStorage.setItem("cart", JSON.stringify(cart));
  };

  return (
    <li className="product">
      <div>
        <a className="product__link" href="#!">
          <ProductImage sprites={pokemon_v2_pokemonsprites[0].sprites} />
          <p className="product__name">{name}</p>
          <p className="product__price">{price}</p>
        </a>
        <button className="product__buyBtn" type="button" onClick={addToCart}>
          Add to cart
        </button>
      </div>
    </li>
  );
};

export default ShelfItem;
