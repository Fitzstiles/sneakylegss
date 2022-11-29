import styles from "../component/Countdown.module.css";
const Countdown = ({ timerDays, timerHours, timerMinutes, timerseconds }) => {
  return (
    <div className={styles.timer}>
      <div className={styles.timer__items}>
        <p>{timerDays}</p>
        <small>Days</small>
      </div>
      <div className={styles.timer__items}>
        <p>{timerHours}</p>
        <small>Hours</small>
      </div>
      <div className={styles.timer__items}>
        <p>{timerMinutes}</p>
        <small>Minutes</small>
      </div>
      <div className={styles.timer__items}>
        <p>{timerseconds}</p>
        <small>Seconds</small>
      </div>
    </div>
  );
};

export default Countdown;
