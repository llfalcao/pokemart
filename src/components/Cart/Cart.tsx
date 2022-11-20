import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import CartModel from "../../typings/Cart";
import CartItem from "../CartItem/CartItem";
import CartSummary from "../CartSummary/CartSummary";

interface Props {
  cart: CartModel;
}

const Cart = ({ cart }: Props) => {
  const [width, setWidth] = useState<number>(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className={`cart ${width < 1060 ? "cart--hidden" : ""}`}>
      <h3 className="cart__title">PokéBag</h3>
      <ul className="cart__list">
        {cart.items.length > 0 ? (
          cart.items?.map((item) => <CartItem key={item.id} pokemon={item} />)
        ) : (
          <p className="cart__empty">Your cart is empty!</p>
        )}
      </ul>
      <CartSummary cart={cart} />
      <Link className="cart__checkoutBtn" to="/pokemart/checkout">
        Checkout
      </Link>
    </div>
  );
};

export default Cart;
