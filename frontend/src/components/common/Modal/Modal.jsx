import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { IconWrapper } from "../IconWrapper/IconWrapper";
import styles from "./Modal.module.css";
export const Modal = ({ children, setIsOpen }) => {
  const onClose = () => {
    setIsOpen(false);
  };
  return (
    <div className={styles.modal}>
      <div className={styles.overlay}></div>
      <div className={styles.box}>{children}</div>
      <div className={styles.close} onClick={onClose}>
        <IconWrapper icon={faXmark}></IconWrapper>
      </div>
    </div>
  );
};
