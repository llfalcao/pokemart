import { useEffect, useState } from "react";

import { CartItem as CartItemModel } from "../../typings/Cart";
import ProductImage from "../ProductImage/ProductImage";
import ProductName from "../ProductName/ProductName";
import ProductPrice from "../ProductPrice/ProductPrice";

import { ReactComponent as Close } from "../../assets/icons/Close.svg";

interface Props {
  pokemon: CartItemModel;
  removeItem: (id: number) => void;
}

const CartItem = ({ pokemon, removeItem }: Props) => {
  const { id, name, price, images, quantity } = pokemon;
  const [amount, setAmount] = useState(quantity);
  const itemSubtotal = (parseFloat(price) * amount).toFixed(2);

  useEffect(() => setAmount(quantity), [quantity]);

  const increment = () => setAmount(amount + 1);
  const decrement = () => setAmount(amount - 1);

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
          <p className="cartItem__quantity">{amount}</p>
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
        onClick={() => removeItem(id)}
      >
        <Close />
      </button>
    </li>
  );
};

export default CartItem;
