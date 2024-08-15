import styles from "./Logo.module.css";
import logo from "../../../../images/colorful-bird-illustration-gradient.png";

export const Logo = () => {
  return (
    <div className={styles.logo}>
      <h1 className={styles.title}>Garden Hotel</h1>
      <div className={styles.imgWrapper}>
        <img className={styles.img} src={logo}></img>
      </div>
    </div>
  );
};
