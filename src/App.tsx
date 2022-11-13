import Cart from "./components/Cart/Cart";
import Shelf from "./components/Shelf/Shelf";

const App = () => {
  return (
    <div className="App">
      <div>
        <h1>PokéStore</h1>
        <Shelf quantity={2} />
      </div>
      <Cart />
    </div>
  );
};

export default App;
