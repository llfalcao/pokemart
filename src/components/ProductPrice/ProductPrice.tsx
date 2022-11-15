import { Stat } from "../../typings/Pokemon";
import { getPrice } from "../../utils/utils";

interface Props {
  stats?: Stat[];
  price?: string;
  className: string;
}

const ProductPrice = ({ stats, price, className }: Props) => {
  const productPrice = stats ? getPrice(stats) : price;
  return (
    <p className={className}>
      <span>
        <img
          className="currency"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Pokémon_Dollar_sign.svg/23px-Pokémon_Dollar_sign.svg.png"
          alt=""
        />
      </span>
      {productPrice}
    </p>
  );
};

export default ProductPrice;
