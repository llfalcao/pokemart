import { useEffect, useState } from "react";
import Cart from "../../typings/Cart";
import ProductPrice from "../ProductPrice/ProductPrice";

interface Props {
  cart: Cart;
}

const CartSummary = ({ cart }: Props) => {
  const [subtotal, setSubtotal] = useState<string>("0.00");
  const [shipping, setShipping] = useState<string>("0.00");

  // Handle cart summary
  useEffect(() => {
    setSubtotal(
      cart.items
        .reduce(
          (sum, current) => sum + parseFloat(current.price) * current.quantity,
          0,
        )
        .toFixed(2),
    );

    if (cart.items.length === 0) {
      setShipping("0.00");
    } else {
      setShipping((Math.random() * 100).toFixed(2));
    }
  }, [cart]);

  const getTotal = () => {
    return (parseFloat(subtotal) + parseFloat(shipping)).toFixed(2);
  };

  return (
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
  );
};

export default CartSummary;
