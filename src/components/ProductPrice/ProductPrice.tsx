import { Stat } from "../../typings/Pokemon";
import { getPrice } from "../../utils/utils";

interface Props {
  stats?: Stat[];
  price?: string;
  className: string;
}

const ProductPrice = ({ stats, price, className }: Props) => {
  const productPrice = stats ? getPrice(stats) : price;
  return <p className={className}>{productPrice}</p>;
};

export default ProductPrice;
