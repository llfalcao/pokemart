interface Props {
  name: string;
  className: string;
}

const ProductName = ({ name, className }: Props) => {
  const productName = name.substring(0, 1).toUpperCase() + name.slice(1);

  return <p className={className}>{productName}</p>;
};

export default ProductName;
