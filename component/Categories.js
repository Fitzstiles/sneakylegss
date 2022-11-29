import styles from "../component/Categories.module.css";
import Link from "next/link";

const Categories = () => {
  return (
    <div className={styles.categories__container} data-aos="fade-up">
      <h2>CATEGORIES</h2>
      <div data-aos="fade-up" className={styles.container}>
        <Link href="/WomenSneakers">
          <div className={styles.image__container}>
            <img
              src="https://images.unsplash.com/photo-1588117305388-c2631a279f82?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHNuZWFrZXJzJTIwd29tZW58ZW58MHx8MHx8&w=1000&q=80"
              alt=""
            />
            <span style={{ backgroundColor: "#CDAFA5" }}>WOMEN SNEAKERS</span>
          </div>
        </Link>
        <Link href="/mensneakers">
          <div data-aos="fade-up" className={styles.image__container}>
            <img
              src="https://images.unsplash.com/photo-1556906781-9a412961c28c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80%27"
              alt=""
            />
            <span style={{ backgroundColor: "#FFFFFF" }}>MEN SNEAKERS</span>
          </div>
        </Link>
        <Link href="/bestselling">
          <div data-aos="fade-up" className={styles.image__container}>
            <img
              src="https://images.unsplash.com/photo-1559067515-bf7d799b6d4d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
              alt=""
            />
            <span style={{ backgroundColor: "#A4A4A4" }}>BEST SELLING</span>
          </div>
        </Link>
        <div data-aos="fade-up" className={styles.image__container}>
          <img
            src="https://images.unsplash.com/photo-1608319294852-d87737e8e46c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
            alt=""
          />
          <span style={{ backgroundColor: "#AC8067" }}> NEW ARRIVALS</span>
        </div>
      </div>
    </div>
  );
};

export default Categories;
