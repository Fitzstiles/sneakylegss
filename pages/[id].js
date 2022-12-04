import { useRouter } from "next/router";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import products from "../DB";
import StarRateIcon from "@mui/icons-material/StarRate";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useState } from "react";
import Head from "next/head";
const Details = () => {
  const router = useRouter();
  const { id } = router.query;
  const [liked, setLiked] = useState(false);
  const product = products.find((a) => a.id == id);
  if (!router.isReady) return;
  const colors = product?.color;
  return (
    <>
      <Head>
        <title>SneakyLegs</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="./public/images/icon.png" />
      </Head>
      <div className={styles.details__container}>
        <Link href="/products">Back to products page</Link>
        <div className={styles.detailsItems__container}>
          <div className={styles.left__container}>
            <div className={styles.details__image}>
              <img src={product?.image} alt="" key={product.id} />
            </div>
          </div>
          <div className={styles.right__container} key={product.id}>
            <h2>{product?.name}</h2>
            <div className={styles.fillrating}>
              {Array(product?.rating)
                .fill()
                .map((_, i) => (
                  <StarRateIcon style={{ fill: "#F7AB09" }} key={i} />
                ))}
            </div>
            <p>{product?.description}</p>
            <div className={styles.details}>
              <p>
                <small>price:</small> ${product?.price}
              </p>
              <button>
                <LocalMallIcon />
                Add to cart
              </button>
            </div>
            <section className={styles.free__shipping}>
              <p>
                <LocalShippingIcon />
                free shipping
              </p>
            </section>
            <div className={styles.color__section}>
              <p>Available shoe colors</p>
              <div className={styles.select__color}>
                {colors?.map((color) => (
                  <div
                    style={{
                      backgroundColor: `${color}`,
                      width: 50,
                      height: 50,
                      borderRadius: "50%",
                      cursor: "pointer",
                    }}
                  ></div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <section className={styles.final__section}>
          <h1>Delivered to your Door</h1>
          <p>
            Your product will be deliverd to the specified location at the
            stipulated time with free shipping on all purchases
          </p>
        </section>
      </div>

      {/*
      
      
     ********* Mobile View Design *******
      
      */}

      <div className={styles.mobileView__container}>
        <div className={styles.header__section}>
          <Link href="/products">
            <ArrowBackIosNewIcon />
          </Link>

          <p>{product.name}</p>
        </div>
        <div className={styles.mobile__detailsImage}>
          <img src={product.image} alt="" />
        </div>
        <div className={styles.product__name}>
          <p>{product.name}</p>
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
        </div>
        <div className={styles.color__section}>
          <p>Available shoe colors</p>
          <div className={styles.select__color}>
            {colors?.map((color) => (
              <div
                style={{
                  backgroundColor: `${color}`,
                  width: 30,
                  height: 30,
                  borderRadius: "50%",
                }}
              ></div>
            ))}
          </div>
        </div>
        <div className={styles.box}>
          <div>
            <button>Description</button>
            <button>Comments</button>
          </div>

          <p>{product.description}</p>
        </div>
        <div className={styles.last__section}></div>
      </div>
    </>
  );
};

export default Details;
