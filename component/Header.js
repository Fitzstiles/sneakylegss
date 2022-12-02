import styles from "../component/Header.module.css";
import { useState } from "react";
import Link from "next/link";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import SearchIcon from "@mui/icons-material/Search";

const Header = () => {
  const [isOpen, setIsopen] = useState(false);
  const cart = 20;
  const handleclosednav = () => setIsopen(false);
  return (
    <section className={styles.header__container}>
      <Link href="/">
        <div className={styles.icon}>
          <div className={styles.icon__bg}>
            <p>S</p>
            <span>L</span>
          </div>
          <small>sneakylegs</small>
        </div>
      </Link>
      <div className={styles.mobile__view}>
        <div className={styles.mobile__input}>
          <input type="text" placeholder="Search" />
          <SearchIcon />
        </div>
        <div className={styles.mobile__cart}>
          <ShoppingCartOutlinedIcon />
          {cart >= 1 && <p>{cart}</p>}
        </div>
      </div>

      <section
        className={`${styles.header__links} ${isOpen && styles.open}`}
        onClick={handleclosednav}
      >
        <Link href="/">Home</Link>
        <Link href="/products">Products</Link>
        <a href="#featured">Featured</a>
        <a href="/#about">About us</a>
        <div className={styles.input__section}>
          <input type="text" placeholder="Search" />
          <SearchIcon />
        </div>
        <div className={styles.cart}>
          <ShoppingCartOutlinedIcon />
          {cart >= 1 && <p>{cart}</p>}
        </div>

        <div className={styles.icons}>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXJ5MygTLp9djg2JFzViPzoMU5p_5obekERQ&usqp=CAU"
            style={{
              width: "30px",
              height: "30px",
              borderRadius: "50%",
              objectFit: "cover",
              cursor: "pointer",
              margin: "0",
            }}
            alt=""
          />
        </div>
      </section>

      <div
        className={`${styles.hamburger__menu} ${isOpen && styles.open}`}
        onClick={() => setIsopen(!isOpen)}
      >
        <span className={styles.bar}></span>
      </div>
    </section>
  );
};

export default Header;
