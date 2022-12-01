import ProductCard from "../component/ProductCard";
import products from "../DB";
import styles from "../component/Product.module.css";

const Products = () => {
  return (
    <div className={styles.product__container}>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Products;
