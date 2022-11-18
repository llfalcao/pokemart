import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import CartModel from "../../typings/Cart";
import CartItem from "../CartItem/CartItem";
import ProductPrice from "../ProductPrice/ProductPrice";

interface Props {
  cart: CartModel;
  setCart: (value: React.SetStateAction<CartModel>) => void;
  checkout?: boolean;
}

const Cart = ({ cart, setCart, checkout }: Props) => {
  const [subtotal, setSubtotal] = useState<string>("0.00");
  const [shipping, setShipping] = useState<string>("0.00");

  // Handle cart summary
  useEffect(() => {
    setSubtotal(
      cart.items
        .reduce((sum, current) => sum + parseFloat(current.price), 0)
        .toFixed(2),
    );

    if (cart.items.length === 0) {
      setShipping("0.00");
    } else {
      setShipping((Math.random() * 100).toFixed(2));
    }
  }, [cart]);

  const removeItem = (id: number) => {
    const cartObject: CartModel = JSON.parse(
      localStorage.getItem("cart") ?? '{"items": []}',
    );

    const newCart: CartModel = {
      items: cartObject.items.filter((item) => item.id !== id),
    };

    localStorage.setItem("cart", JSON.stringify(newCart));
    setCart(newCart);
  };

  const getTotal = () => {
    return (parseFloat(subtotal) + parseFloat(shipping)).toFixed(2);
  };

  return (
    <div className="cart">
      <h3 className="cart__title">PokéBag</h3>
      <ul className="cart__list">
        {cart.items?.map((item) => (
          <CartItem key={item.id} pokemon={item} removeItem={removeItem} />
        ))}
      </ul>
      <ul className="cart__summary">
        <li className="cart__summaryItem">
          <span>Items</span>
          <div className="cart__dots"></div>
          <ProductPrice price={subtotal} className="cart__summaryValue" />
        </li>
        <li className="cart__summaryItem">
          <span>Shipping</span>
          <div className="cart__dots"></div>
          {cart.items.length > 0 && shipping === "0.00" ? (
            <span className="cart__summaryValue">"Free"</span>
          ) : (
            <ProductPrice price={shipping} className="cart__summaryValue" />
          )}
        </li>
        <li className="cart__summaryItem">
          <span>
            <strong>Total</strong>
          </span>
          <div className="cart__dots"></div>
          <ProductPrice price={getTotal()} className="cart__summaryValue" />
        </li>
      </ul>

      <Link className="cart__checkoutBtn" to="/checkout">
        Checkout
      </Link>
    </div>
  );
};

export default Cart;
