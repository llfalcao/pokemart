import { Sprite } from "../../typings/Pokemon";
import { getImages } from "../../utils/utils";

interface Props {
  sprites: Sprite[];
  alt: string;
  className: {
    wrapper: string;
    image: string;
  };
}

const ProductImage = ({ sprites, alt, className }: Props) => {
  const { defaultImage, hoverImage } = getImages(sprites);

  return (
    <div className={className.wrapper}>
      <img
        className={className.image}
        src={defaultImage}
        alt={alt}
        width={135}
        height={135}
        loading="lazy"
        onMouseEnter={(event) => (event.currentTarget.src = hoverImage)}
        onMouseLeave={(event) => (event.currentTarget.src = defaultImage)}
        onError={(event) => {
          event.currentTarget.onerror = null;
          event.currentTarget.src = "/pokemart/unknown-pokemon.webp";
        }}
      />
    </div>
  );
};

export default ProductImage;
