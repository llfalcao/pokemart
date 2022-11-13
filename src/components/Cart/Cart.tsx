import { useEffect, useState } from "react";

import CartModel from "../../typings/Cart";
import CartItem from "../CartItem/CartItem";

const Cart = () => {
  const [cart, setCart] = useState<CartModel>({ items: [] });

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
  }, []);

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

  return (
    <div className="cart">
      <h1 className="cart__title">PokéBag</h1>
      <ul className="cart__list">
        {cart.items?.map((item) => (
          <CartItem key={item.id} pokemon={item} removeItem={removeItem} />
        ))}
      </ul>
      <button className="cart__checkoutBtn" type="button">
        Checkout
      </button>
    </div>
  );
};

export default Cart;
