import Pokemon from "../../typings/Pokemon";
import ProductImage from "../ProductImage/ProductImage";
import Cart from "../../typings/Cart";
import ProductName from "../ProductName/ProductName";
import ProductPrice from "../ProductPrice/ProductPrice";

import { getPrice } from "../../utils/utils";

interface Props {
  pokemon: Pokemon;
}

const ShelfItem = ({ pokemon }: Props) => {
  const {
    id,
    name,
    pokemon_v2_pokemonstats: stats,
    pokemon_v2_pokemonsprites: sprites,
  } = pokemon;

  const addToCart = () => {
    const product = {
      id,
      name,
      price: getPrice(stats),
      images: JSON.stringify(sprites).replace(
        '"__typename":"pokemon_v2_pokemonsprites",',
        "",
      ),
      quantity: 1,
    };

    const cart: Cart = JSON.parse(
      localStorage.getItem("cart") ?? '{"items": []}',
    );

    const itemIndex = cart.items.findIndex((item) => item.id === id);

    if (itemIndex < 0) {
      cart.items.unshift(product);
    } else {
      product.quantity += cart.items[itemIndex].quantity;
      cart.items[itemIndex] = product;
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    window.dispatchEvent(new Event("storage"));
  };

  return (
    <li className="product">
      <a className="product__link" href="#!">
        <ProductImage
          sprites={sprites}
          alt={name}
          className={{
            wrapper: "product__imageWrapper",
            image: "product__image",
          }}
        />
        <ProductName name={name} className="product__name" />
        <ProductPrice stats={stats} className="product__price" />
      </a>
      <button className="product__buyBtn" type="button" onClick={addToCart}>
        Add to cart
      </button>
    </li>
  );
};

export default ShelfItem;
