import styles from "./Button.module.css";
export const Button = ({ type, text, styleType, children }) => {
  return (
    <button
      type={type}
      className={`${styles.button} ${
        styleType === "sircle" ? styles.sircle : styles.square
      }`}
    >
      {children}
    </button>
  );
};
