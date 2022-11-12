import Shelf from "./components/Shelf/Shelf";

const App = () => {
  return (
    <div className="App">
      <h1>PokéStore</h1>
      <Shelf quantity={2} />
    </div>
  );
};

export default App;
