import CartItems from "../component/CartItems";
import { useStateValue } from "../globalStore/ContextProvider";
import Link from "next/link";
import Head from "next/head";
import styles from "../styles/Home.module.css";

const Carts = () => {
  const [{ cart }, dispatch] = useStateValue();
  const price = cart.map((a) => a.price);
  const totalPrice = price.reduce((partialSum, a) => partialSum + a, 0);

  return (
    <>
      <Head>
        <title>SneakyLegs</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="../images/icon.png" />
      </Head>

      {cart.length == 0 ? (
        <div className={styles.init}>
          <h1>Your Cart is Empty</h1>
          <Link href="/products">
            click to check out Products and add items to cart
          </Link>
        </div>
      ) : (
        <div className={styles.cart__items}>
          <h2>Your cart</h2>
          <div className="cart__container">
            <div>
              {cart.map((item) => (
                <CartItems key={item.id} item={item} />
              ))}
            </div>

            <div className={styles.proceed__button}>
              <h4>Total Items ({cart?.length} items)</h4>
              <p>Cart Total:${totalPrice}</p>
              <div className="proceed">
                <Link href="/signup">Proceed</Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Carts;
