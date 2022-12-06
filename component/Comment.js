import styles from "../component/Comment.module.css";
const Comment = () => {
  return (
    <div className={styles.comment__container}>
      <h2>TESTIMONIALS</h2>
      <div className={styles.comment__session}>
        <div data-aos="fade-right" className={styles.testimonial__container}>
          <div className={styles.testimonial__header}>
            <div className={styles.comment__image}>
              <img
                src="https://www.biography.com/.image/t_share/MTU0NDU2MTM3MDc5NTMwNTQ2/hailee-steinfeld-visits-build-london-on-december-7-2017-in-london-england-photo-by-mike-marsland_mike-marsland_wireimage.jpg"
                alt=""
              />
            </div>
            <div className={styles.comment__details}>
              <h4>Hailee Steinfield</h4>
              <p>Uganda</p>
            </div>
          </div>
          <p>
            I really love the sneakers I bought from this store, very long
            lasting and pretty inexpensive
          </p>
        </div>
        <div data-aos="fade-right" className={styles.testimonial__container}>
          <div className={styles.testimonial__header}>
            <div className={styles.comment__image}>
              <img
                src="https://media.them.us/photos/63054fbbc10f740995c29c7b/16:9/w_2560%2Cc_limit/1388124380"
                alt=""
              />
            </div>
            <div data-aos="fade-right" className={styles.comment__details}>
              <h4>Lili Reinhart</h4>
              <p>Nigeria</p>
            </div>
          </div>
          <p>
            They deliver expressly, got my sneakers the same day I placed the
            order. also love how original the product is.
          </p>
        </div>
        <div data-aos="fade-right" className={styles.testimonial__container}>
          <div className={styles.testimonial__header}>
            <div className={styles.comment__image}>
              <img
                src="https://i0.wp.com/superstarsbio.com/wp-content/uploads/2021/01/Camila-Perez-height.jpg?ssl=1"
                alt=""
              />
            </div>
            <div className={styles.comment__details}>
              <h4>Camila Perez</h4>
              <p>Ghana</p>
            </div>
          </div>
          <p>
            This is my go to plug for all things sneakers cause their customer
            service is top notch.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Comment;
