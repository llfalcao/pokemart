import { ReactComponent as Search } from "../../assets/icons/Search.svg";
import { ReactComponent as Bag } from "../../assets/icons/Bag.svg";

interface Props {
  search?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  cartItems: number;
}

const Header = ({ search, onChange, cartItems }: Props) => {
  return (
    <header className="header">
      <div className="header__logo">
        <img src="/logo.webp" alt="Logo" width={32} height={32} />
        <p>PokéMart</p>
      </div>
      <form className="search" onSubmit={(event) => event.preventDefault()}>
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
      <div className="header__cart">
        <Bag />
        <span className="header__cartAmount">{cartItems ?? 0}</span>
      </div>
    </header>
  );
};

export default Header;
