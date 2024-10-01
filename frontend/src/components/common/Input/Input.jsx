import { forwardRef } from "react";
import styles from "./Input.module.css";
import { memo } from "react";

const Input = forwardRef(
  ({ className, type, id, placeholder, ...rest }, ref) => {
    return (
      <input
        type={type}
        className={
          type === "text" || type === "password" || type === "email"
            ? styles.input
            : className
        }
        ref={ref}
        id={id}
        placeholder={placeholder}
        {...rest}
      />
    );
  }
);
export default memo(Input);

// export const Input = ({
//   className,
//   type,
//   id,
//   value,
//   onChange,
//   placeholder,
//   ...rest
// }) => {
//   return (
//     <input
//       type={type}
//       className={
//         type === "text" || type === "password" || type === "email"
//           ? styles.input
//           : className
//       }
//       id={id}
//       value={value}
//       onChange={onChange}
//       placeholder={placeholder}
//       {...rest}
//     />
//   );
// };
