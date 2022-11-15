import { useEffect, useState } from "react";

import CartModel from "../../typings/Cart";
import CartItem from "../CartItem/CartItem";
import ProductPrice from "../ProductPrice/ProductPrice";

const Cart = () => {
  const [cart, setCart] = useState<CartModel>({ items: [] });
  const [subtotal, setSubtotal] = useState<string>("0.00");
  const [shipping, setShipping] = useState<string>("0.00");

  useEffect(() => {
    const loadCart = () => {
      const cartObject: CartModel = JSON.parse(
        localStorage.getItem("cart") ?? '{"items": []}',
      );

      setCart(cartObject);
    };

    loadCart();
    window.addEventListener("storage", loadCart);
    return () => window.removeEventListener("storage", loadCart);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setSubtotal(
      cart.items
        .reduce((sum, current) => sum + parseFloat(current.price), 0)
        .toFixed(2),
    );
    setShipping((Math.random() * 100).toFixed(2));
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
          {shipping === "0.00" ? (
            <span className="cart__summaryValue">"Free"</span>
          ) : (
            <ProductPrice price={shipping} className="cart__summaryValue" />
          )}
        </li>
        <li className="cart__summaryItem">
          <span>Total</span>
          <div className="cart__dots"></div>
          <ProductPrice price={getTotal()} className="cart__summaryValue" />
        </li>
      </ul>
      <button className="cart__checkoutBtn" type="button">
        Checkout
      </button>
    </div>
  );
};

export default Cart;
