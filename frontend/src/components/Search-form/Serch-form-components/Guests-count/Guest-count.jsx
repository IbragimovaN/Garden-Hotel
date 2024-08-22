import { useState } from "react";
import { Button } from "../../../common/Button/Button";
import styles from "./Guest-count.module.css";

export const GuestCount = ({ ageGroup }) => {
  const [count, setCount] = useState(0);
  return (
    <div className={styles.row}>
      <span>{ageGroup}</span>
      <div className={styles.count}>
        <Button styleType="sircle">+</Button>
        {count}
        <Button styleType="sircle">-</Button>
      </div>
    </div>
  );
};
