import { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";
import Countdown from "../component/Countdown";
import Link from "next/link";

const Bestselling = () => {
  const [timerDays, setTimerdays] = useState();
  const [timerHours, setTimerHours] = useState();
  const [timerMinutes, settimerMinutes] = useState();
  const [timerseconds, setTimerseconds] = useState();

  let interval;
  const startTimer = () => {
    const countDownDate = new Date("december  26 , 2023").getTime();
    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countDownDate - now;
      const days = Math.floor(distance / (24 * 60 * 60 * 1000));
      const hour = Math.floor(
        (distance % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (60 * 60 * 1000)) / (1000 * 60));
      const seconds = Math.floor((distance % (60 * 1000)) / 1000);
      if (distance < 0) {
        clearInterval(interval.current);
      } else {
        setTimerdays(days);
        setTimerHours(hour);
        settimerMinutes(minutes);
        setTimerseconds(seconds);
      }
    });
  };
  useEffect(() => {
    startTimer();
  });
  return (
    <div className={styles.bestselling} data-aos="fade-up">
      <div className={styles.bestselling__container}>
        <Countdown
          timerDays={timerDays}
          timerHours={timerHours}
          timerMinutes={timerMinutes}
          timerseconds={timerseconds}
        />
        <div className={styles.image__container}>
          <img
            src="https://sneakylegss.vercel.app/images/shoe2.jpg"
            style={{
              maxWidth: "100%",
              objectFit: "cover",
              marginTop: "20px",
            }}
            alt=""
          />
          <h2>50% off</h2>
        </div>
      </div>
      <div className={styles.link__container}>
        <Link href="/"> BUY NOW</Link>
      </div>
      <div className={styles.pricce}>
        <p>$200</p>
        <span>$400</span>
      </div>
    </div>
  );
};

export default Bestselling;
