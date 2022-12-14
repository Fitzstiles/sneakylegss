import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import StarRateIcon from "@mui/icons-material/StarRate";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useState } from "react";
import styles from "../component/Product.module.css";
import Link from "next/link";
import { useStateValue } from "../globalStore/ContextProvider";

const ProductCard = ({ product }) => {
  const [{ cart }, dispatch] = useStateValue();
  const [liked, setLiked] = useState(false);
  const addTocart = () => {
    dispatch({
      type: "ADD_TO_CART",
      payload: product,
    });
  };
  const removeFromCart = () => {
    dispatch({
      type: "REMOVE_FROM_CART",
      id: product.id,
    });
  };

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
          <small style={{ color: "white" }}>₦‎</small>
          {product.price}
        </p>
      </div>
      <div className={styles.productCard__details}>
        <div className={styles.productcard__name}>
          <h4>{product.name}</h4>
        </div>

        {cart.some((p) => p.id === product.id) ? (
          <button onClick={removeFromCart}>Remove from cart</button>
        ) : (
          <button onClick={addTocart}>Add to cart</button>
        )}

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
