import ProductCard from "../component/ProductCard";
import products from "../DB";
import styles from "../component/Product.module.css";

const Products = () => {
  return (
    <div className={styles.AllProduct__container}>
      <div className={styles.product__container}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
