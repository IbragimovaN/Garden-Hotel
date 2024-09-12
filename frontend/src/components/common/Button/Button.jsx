import styles from "./Button.module.css";
export const Button = ({ type, styleType, children, onClick }) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className={`${styles.button} ${
        styleType === "sircle"
          ? styles.sircle
          : styleType === "miniSquare"
          ? styles.miniSquare
          : styles.square
      }`}
    >
      {children}
    </button>
  );
};
