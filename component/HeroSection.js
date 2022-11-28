import styles from "../component/Hero.module.css";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  return (
    <div className={styles.hero__container}>
      <div className={styles.bg__img}>
        <img
          src="https://images.unsplash.com/photo-1549298916-f52d724204b4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHNuZWFrZXJzfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
          alt=""
        />
      </div>
      <div className={styles.textarea}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className={styles.bold__text}
        >
          <h1>
            Run Your World With the Right <span>Shoes</span>
          </h1>
        </motion.div>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
        >
          Never be caught unfresh at any moment, follow the ever evolving
          fashion and get the right sneakers today.
        </motion.p>
        <motion.div
          initial={{ y: "100vw" }}
          animate={{ y: 0 }}
          transition={{ delay: 1, duration: 3 }}
          className={styles.btn}
        >
          <Link href="/products">
            <LocalMallIcon style={{ fill: "#c55e20", fontSize: 15 }} />
            SHOP NOW
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
