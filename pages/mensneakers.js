import products from "../DB";
import Mencard from "../component/Mencard";
import styles from "../component/Product.module.css";
const Mensneakers = () => {
  return (
    <div className={styles.product__container}>
      {products
        .filter((product) => product.gender === "m")
        .map((filteredPerson) => (
          <Mencard key={filteredPerson.id} filteredPerson={filteredPerson} />
        ))}
    </div>
  );
};

export default Mensneakers;
