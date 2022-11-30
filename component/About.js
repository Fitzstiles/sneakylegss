import styles from "../component/About.module.css";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
const About = () => {
  return (
    <div className={styles.about__container} data-aos="fade-up">
      <h1>Why shop sneakylegs</h1>

      <div className={styles.container}>
        <div data-aos="fade-up" className={styles.small__container}>
          <div className={styles.icons}>
            <div className={styles.icons__bg}>
              <LocalShippingIcon />
            </div>
          </div>
          <h3>Quick Delivery</h3>
          <div className={styles.text}>
            <p>Get your items shipped to you within minutes.</p>
          </div>
        </div>
        <div data-aos="fade-up" className={styles.small__container}>
          <div className={styles.icons}>
            <div className={styles.icons__bg}>
              <CreditCardIcon />
            </div>
          </div>
          <h3>SECURED PAYMENT</h3>
          <div className={styles.text}>
            <p>All modes of payments are safe and trusted.</p>
          </div>
        </div>

        <div data-aos="fade-up" className={styles.small__container}>
          <div className={styles.icons}>
            <div className={styles.icons__bg}>
              <CheckCircleIcon />
            </div>
          </div>
          <h3>AUTHENTICITY GUARANTEED</h3>
          <div className="text">
            <p>Products sold at sneakylegs are 100% original.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
