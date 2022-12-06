import ProductCard from "../component/ProductCard";
import products from "../DB";
import styles from "../component/Product.module.css";
import Head from "next/head";

const Products = () => {
  return (
    <>
      <Head>
        <title>SneakyLegs</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="../images/icon.png" />
      </Head>
      <div className={styles.product__container}>
        {products.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
    </>
  );
};

export default Products;
