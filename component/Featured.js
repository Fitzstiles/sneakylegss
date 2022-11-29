import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useState } from "react";
import Link from "next/link";
import styles from "../component/Featured.module.css";

const Featured = () => {
  const [liked, setLiked] = useState(false);
  return (
    <div data-aos="fade-up" className={styles.featured} id="featured">
      <h2>FEATURED ITEM</h2>
      <div className={styles.featured__container}>
        <div data-aos="fade-up" className={styles.featured__left}>
          <h3>New season</h3>
          <h5>Adidas YEEZY</h5>
          <p>
            Also nicknamed "sand" sneakers, it doesn't get more futuristic than
            the RNRR "sand" sneaker from Adidas YEEZY.crafted from EVA foam and
            harvested algae, this pair is ultra lightweight and one of the
            market most progressive step out in unique style
          </p>
          <p>
            Originally made of rubber, with a perforated design,almond toe and
            slip on style.
          </p>
          <p>
            PRICE: <strong>$20</strong>
          </p>
          <Link href="/"> BUY NOW</Link>
          <button>ADD TO CART</button>
        </div>
        <div data-aos="zoom-in" className={styles.right}>
          <div className={styles.featured__image}>
            <div
              onClick={() => setLiked(!liked)}
              className={styles.liked__container}
            >
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
            <img
              src="https://cdn-images.farfetch-contents.com/16/65/80/89/16658089_32552931_480.jpg"
              alt=""
            />
          </div>
          <div className={styles.bottom__image}>
            <div className={styles.smallImg__container}>
              <img
                src="https://cdn-images.farfetch-contents.com/18/13/06/60/18130660_38865231_480.jpg"
                alt=""
              />
            </div>
            <div className={styles.smallImg__container}>
              <img
                src="https://cdn-images.farfetch-contents.com/16/89/96/08/16899608_33544113_480.jpg"
                alt=""
              />
            </div>
            <div className={styles.smallImg__container}>
              <img
                src="https://cdn-images.farfetch-contents.com/17/71/43/51/17714351_37240424_480.jpg"
                alt=""
              />
            </div>
            <div className={styles.smallImg__container}>
              <img
                src="https://cdn-images.farfetch-contents.com/16/65/80/90/16658090_32553873_480.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
