import Cart from "../../components/Cart/Cart";
import Shelf from "../../components/Shelf/Shelf";
import CartModel from "../../typings/Cart";

interface Props {
  query?: string;
  cart: CartModel;
}

const Home = ({ query, cart }: Props) => {
  return (
    <div className="content">
      <div className="main">
        <Shelf quantity={10} query={query} />
      </div>
      <Cart cart={cart} />
    </div>
  );
};

export default Home;
