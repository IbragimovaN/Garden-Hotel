import styles from "./Input.module.css";

export const Input = ({
  className,
  type,
  id,
  value,
  onChange,
  placeholder,
}) => {
  return (
    <input
      type={type}
      className={
        type === "text" || type === "password" || type === "login"
          ? styles.input
          : className
      }
      id={id}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
};
