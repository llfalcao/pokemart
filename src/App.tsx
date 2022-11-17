import { useEffect, useState } from "react";

import Cart from "./components/Cart/Cart";
import Header from "./components/Header/Header";
import Shelf from "./components/Shelf/Shelf";
import CartModel from "./typings/Cart";

const App = () => {
  const [search, setSearch] = useState<string>("");
  const [query, setQuery] = useState<string>("");
  const [cart, setCart] = useState<CartModel>({ items: [] });

  // Handle cart items
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

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  const handleSearchSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!search) return;
    setQuery(search);
  };

  return (
    <div className="App">
      <Header
        search={search}
        onChange={handleSearchChange}
        cartItems={cart.items.length}
        submit={handleSearchSubmit}
      />
      <div className="content">
        <div className="main">
          <Shelf quantity={10} query={query} />
        </div>
        <Cart cart={cart} setCart={setCart} />
      </div>
    </div>
  );
};

export default App;
