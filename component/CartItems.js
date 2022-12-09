import React, { useState } from "react";
import styles from "../styles/Home.module.css";
import DeleteIcon from "@mui/icons-material/Delete";
import { useStateValue } from "../globalStore/ContextProvider";

const Cart = ({ item }) => {
  const [{ cart }, dispatch] = useStateValue();
  const [num, setNum] = useState(1);
  const increseNum = () => {
    setNum(num + 1);
  };
  const decrease = () => {
    setNum(num - 1);
  };

  const removeFromCart = () => {
    dispatch({
      type: "REMOVE_FROM_CART",
      id: item.id,
    });
  };
  return (
    <div className={styles.positioning}>
      <div className={styles.cart__container}>
        <div className={styles.first__section}>
          <div className={styles.cart__images}>
            <img src={item.image} alt="" />
          </div>
        </div>

        <div className={styles.cart__info}>
          <p>{item.name}</p>
          <p>{item.price}</p>
          <div className={styles.options}>
            <button onClick={decrease} disabled={num < 2 ? true : false}>
              -
            </button>
            <p>{num}</p>
            <button onClick={increseNum}>+</button>
            <DeleteIcon onClick={removeFromCart} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
