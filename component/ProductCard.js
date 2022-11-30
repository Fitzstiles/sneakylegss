import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import StarRateIcon from "@mui/icons-material/StarRate";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useState } from "react";
import styles from "../component/Product.module.css";
import Link from "next/link";

const ProductCard = ({ product }) => {
  const [liked, setLiked] = useState(false);
  //   const addTocart = () => {
  //     dispatch({
  //       type: "ADD_TO_CART",
  //       payload: product,
  //     });
  //   };

  return (
    <div data-aos="fade-up" className={styles.productCard__wrapper}>
      <div className={styles.productCard__image}>
        <Link href={`${product.id}`}>
          <img src={product.image} alt="" />
        </Link>
        <div className={styles.heart__icon} onClick={() => setLiked(!liked)}>
          {liked ? (
            <FavoriteIcon
              style={{
                fill: "red",
              }}
            />
          ) : (
            <FavoriteBorderIcon />
          )}
        </div>

        <p>
          <small style={{ color: "white" }}>$</small>
          {product.price}
        </p>
      </div>
      <div className={styles.productCard__details}>
        <div className={styles.productcard__name}>
          <h4>{product.name}</h4>
        </div>

        <button>Add to cart</button>
        <div className={styles.fillrating}>
          {Array(product.rating)
            .fill()
            .map((_, i) => (
              <StarRateIcon style={{ fill: "#F7AB09" }} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
