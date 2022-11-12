interface Props {
  sprites: string;
}

const ProductImage = ({ sprites }: Props) => {
  const images = JSON.parse(sprites);
  const defaultImage = images.other.home.front_default ?? "";
  const hoverImage = images.other.home.front_shiny ?? "";

  return (
    <div className="product__imageWrapper">
      <img
        className="product__image"
        src={defaultImage}
        alt=""
        width={135}
        height={135}
        loading="lazy"
        onMouseEnter={(event) => (event.currentTarget.src = hoverImage)}
        onMouseLeave={(event) => (event.currentTarget.src = defaultImage)}
      />
    </div>
  );
};

export default ProductImage;
