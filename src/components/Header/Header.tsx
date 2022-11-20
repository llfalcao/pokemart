import { ReactComponent as Search } from "../../assets/icons/Search.svg";
import { ReactComponent as Bag } from "../../assets/icons/Bag.svg";

interface Props {
  search?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  cartItems: number;
  submit?: React.FormEventHandler<HTMLFormElement>;
}

const Header = ({ search, onChange, cartItems, submit }: Props) => {
  const toggleCart = () => {
    const cart = document.querySelector(".cart");

    if (cart?.classList.contains("cart--hidden")) {
      cart.classList.remove("cart--hidden");
    } else {
      cart?.classList.add("cart--hidden");
    }
  };

  return (
    <header className="header">
      <div className="header__logo">
        <img src="/logo.webp" alt="Logo" width={32} height={32} />
        <p>PokéMart</p>
      </div>
      <form className="search" onSubmit={submit}>
        <fieldset>
          <input
            type="search"
            placeholder="Search..."
            maxLength={200}
            value={search}
            onChange={onChange}
          />
          <button type="submit" title="Search Pokémon">
            <Search />
          </button>
        </fieldset>
      </form>
      <button
        type="button"
        aria-label="Minicart"
        className="header__cart"
        onClick={toggleCart}
      >
        <Bag />
        <span className="header__cartAmount">{cartItems ?? 0}</span>
      </button>
    </header>
  );
};

export default Header;
