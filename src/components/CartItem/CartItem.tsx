import CartModel, { CartItem as CartItemModel } from "../../typings/Cart";
import ProductImage from "../ProductImage/ProductImage";
import ProductName from "../ProductName/ProductName";
import ProductPrice from "../ProductPrice/ProductPrice";

import { ReactComponent as Close } from "../../assets/icons/Close.svg";

interface Props {
  pokemon: CartItemModel;
}

const CartItem = ({ pokemon }: Props) => {
  const { id, name, price, images, quantity } = pokemon;
  const itemSubtotal = (parseFloat(price) * quantity).toFixed(2);

  const getCart = (): CartModel =>
    JSON.parse(localStorage.getItem("cart") ?? '{"items": []}');

  const updateCart = (cartObject: CartModel) => {
    localStorage.setItem("cart", JSON.stringify(cartObject));
    window.dispatchEvent(new Event("storage"));
  };

  const updateQuantity = (n: number) => {
    const cartObject = getCart();
    const newCart: CartModel = {
      items: cartObject.items.map((item) =>
        item.id === id ? { ...pokemon, quantity: pokemon.quantity + n } : item,
      ),
    };

    updateCart(newCart);
  };

  const removeItem = () => {
    const cartObject = getCart();
    const newCart: CartModel = {
      items: cartObject.items.filter((item) => item.id !== id),
    };

    updateCart(newCart);
  };

  const increment = () => updateQuantity(1);
  const decrement = () => (quantity === 1 ? removeItem() : updateQuantity(-1));

  return (
    <li className="cartItem">
      <div className="cartItem__linkContainer">
        <a className="cartItem__link" href="#!">
          <ProductImage
            sprites={JSON.parse(images)}
            alt={name}
            className={{
              wrapper: "cartItem__imageWrapper",
              image: "cartItem__image",
            }}
          />
          <div className="cartItem__namePriceContainer">
            <ProductName name={name} className="cartItem__name" />
            <ProductPrice price={itemSubtotal} className="cartItem__price" />
          </div>
        </a>
        <div className="cartItem__quantitySelector">
          <button
            className="cartItem__decrementBtn"
            type="button"
            onClick={decrement}
          >
            -
          </button>
          <p className="cartItem__quantity">{quantity}</p>
          <button
            className="cartItem__incrementBtn"
            type="button"
            onClick={increment}
          >
            +
          </button>
        </div>
      </div>
      <button
        className="cartItem__removeBtn"
        type="button"
        onClick={removeItem}
      >
        <Close />
      </button>
    </li>
  );
};

export default CartItem;
