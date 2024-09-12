import styles from "./H2.module.css";

export const H2 = ({ children }) => {
  return <h2 className={styles.h2}>{children}</h2>;
};
