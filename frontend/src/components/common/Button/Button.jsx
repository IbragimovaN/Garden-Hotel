import styles from "./Button.module.css";
export const Button = ({ type, text, styleType, children, onClick }) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className={`${styles.button} ${
        styleType === "sircle" ? styles.sircle : styles.square
      }`}
    >
      {children}
    </button>
  );
};
