import Cart from "./components/Cart/Cart";
import Shelf from "./components/Shelf/Shelf";

const App = () => {
  return (
    <div className="App">
      <header></header>
      <div className="content">
        <div className="main">
          <h1>PokéStore</h1>
          <Shelf quantity={18} />
        </div>
        <Cart />
      </div>
    </div>
  );
};

export default App;
