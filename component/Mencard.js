import StarRateIcon from "@mui/icons-material/StarRate";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import styles from "../component/Product.module.css";
import { useState } from "react";
import Link from "next/link";
const Women = ({ filteredPerson }) => {
  const [liked, setLiked] = useState(false);

  return (
    <div className={styles.productCard__wrapper}>
      <div className={styles.productCard__image}>
        <Link href={`${filteredPerson.id}`}>
          <img src={filteredPerson.image} alt="" />
        </Link>
        <div className={styles.heart__icon} onClick={() => setLiked(!liked)}>
          {liked ? (
            <FavoriteIcon style={{ fill: "red" }} />
          ) : (
            <FavoriteBorderIcon />
          )}
        </div>
        <p>
          <small style={{ color: "white" }}>$</small>
          {filteredPerson.price}
        </p>
      </div>
      <div className={styles.productCard__details}>
        <div className={styles.productcard__name}>
          <h4>{filteredPerson.name}</h4>
        </div>
        <button>Add to cart</button>
        <div className={styles.rating}>
          {Array(filteredPerson.rating)
            .fill()
            .map((_, i) => (
              <StarRateIcon style={{ fill: "#F7AB09" }} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Women;