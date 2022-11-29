import styles from "../component/Footer.module.css";
import Link from "next/link";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
const Footer = () => {
  return (
    <div className={styles.footer__container} id="about">
      <div className={styles.icon}>
        <div className={styles.icon__bg}>
          <p>S</p>
          <span>L</span>
        </div>
        <Link href="/">SnekyLegs</Link>
      </div>
      <div className={styles.content}>
        <div className={styles.footer__items}>
          <div className={styles.contact__us}>
            <h3>CONTACT US</h3>
            <p>15 Palm Hall Street, Lekki phase 1,Lagos,Nigeria</p>
            <p>
              <img src="" alt="" />
              (+234) 1234 5678
            </p>
          </div>
        </div>
        <div className={styles.company_info}>
          <h3>COMPANY</h3>
          <p>Products</p>
          <p>Features</p>
          <p>About us</p>
        </div>
        <div className={styles.links}>
          <h3>QUICK LINKS</h3>
          <p>Faq</p>
          <p>Privacy Policy</p>
          <p>Terms & Condition</p>
        </div>
        <div className={styles.socials}>
          <h3>Reach us on our social media</h3>
          <div className={styles.social__icon}>
            <Link href="/">
              <FacebookIcon />
            </Link>
            <Link href="/">
              <InstagramIcon />
            </Link>
            <Link href="/">
              <TwitterIcon />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
