import styles from "../component/Product.module.css";
import Womencard from "../component/Womencard";
import products from "../DB";

const WomenSneakers = () => {
  return (
    <div className={styles.product__container}>
      {products
        .filter((product) => product.gender === "f")
        .map((filteredPerson) => (
          <Womencard key={filteredPerson.id} filteredPerson={filteredPerson} />
        ))}
    </div>
  );
};

export default WomenSneakers;
