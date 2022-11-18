import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import CartModel from "./typings/Cart";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Checkout from "./pages/Checkout/Checkout";

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
    <>
      <Header
        search={search}
        onChange={handleSearchChange}
        cartItems={cart.items.length}
        submit={handleSearchSubmit}
      />
      <div className="App">
        <Router>
          <Routes>
            <Route path="/">
              <Route index element={<Home query={query} cart={cart} />} />
              <Route path="checkout" element={<Checkout cart={cart} />} />
            </Route>
          </Routes>
        </Router>
      </div>
    </>
  );
};

export default App;
