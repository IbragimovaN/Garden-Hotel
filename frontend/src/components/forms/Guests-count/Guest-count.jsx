import { useState } from "react";
import { Button } from "../../common";
import styles from "./Guest-count.module.css";

export const GuestCount = ({ ageGroup, count, setCount, defaultCount }) => {
  const onClickPlus = () => {
    if (count < 10) {
      setCount(count + 1);
    }
  };

  const onClickMinus = () => {
    if (count > defaultCount) {
      setCount(count - 1);
    }
  };
  return (
    <form className={styles.row}>
      <span>{ageGroup}</span>
      <div className={styles.count}>
        <Button styleType="sircle" type="button" onClick={onClickMinus}>
          -
        </Button>
        {count}
        <Button styleType="sircle" type="button" onClick={onClickPlus}>
          +
        </Button>
      </div>
    </form>
  );
};
