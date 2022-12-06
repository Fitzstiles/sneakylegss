import Head from "next/head";
import styles from "../component/Product.module.css";
import Womencard from "../component/Womencard";
import products from "../DB";

const WomenSneakers = () => {
  return (
    <>
      <Head>
        <title>SneakyLegs</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="../images/icon.png" />
      </Head>
      <div className={styles.product__container}>
        {products
          .filter((product) => product.gender === "f")
          .map((filteredPerson) => (
            <Womencard
              key={filteredPerson.id}
              filteredPerson={filteredPerson}
            />
          ))}
      </div>
    </>
  );
};

export default WomenSneakers;