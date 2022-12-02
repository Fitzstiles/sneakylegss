import { useRouter } from "next/router";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import products from "../DB";
import StarRateIcon from "@mui/icons-material/StarRate";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";

const Details = () => {
  const router = useRouter();
  const { id } = router.query;
  const product = products.find((a) => a.id == id);
  return (
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
            <button>Cancel order</button>
          </section>
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
  );
};

export default Details;
