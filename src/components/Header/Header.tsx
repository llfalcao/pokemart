import { ReactComponent as Search } from "../../assets/icons/Search.svg";
import { ReactComponent as Bag } from "../../assets/icons/Bag.svg";

interface Props {
  search?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  cartItems: number;
  submit?: React.FormEventHandler<HTMLFormElement>;
}

const Header = ({ search, onChange, cartItems, submit }: Props) => {
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
      <div className="header__cart">
        <Bag />
        <span className="header__cartAmount">{cartItems ?? 0}</span>
      </div>
    </header>
  );
};

export default Header;
