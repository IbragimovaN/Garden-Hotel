import { useState } from "react";
import { Button } from "../../common";
import styles from "./Guest-count.module.css";
import { useDispatch } from "react-redux";

export const GuestCount = ({
  ageGroup,
  count,
  decrement,
  increment,
  defaultCount,
}) => {
  const dispatch = useDispatch();
  const onClickPlus = () => {
    if (count < 10) {
      dispatch(increment());
    }
  };

  const onClickMinus = () => {
    if (count > defaultCount) {
      dispatch(decrement());
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
