import { useState } from "react";
import styles from "./Search-form-dates.module.css";
import { Input } from "../../../common/Input/Input";

export const SearchFormDates = () => {
  const [checkInDate, setCheckInDate] = useState(Date.now);
  const [checkOutDate, setCheckOutDate] = useState(Date.now);

  const handleCheckInChange = (event) => {
    setCheckInDate(event.target.value);
  };

  const handleCheckOutChange = (event) => {
    setCheckOutDate(event.target.value);
  };
  return (
    <div className={styles.searchFormDatesWrapper}>
      <form className={styles.group}>
        <label htmlFor="check-in" className={styles.label}>
          <div className={styles.label_title}> дата заезда</div>

          <Input
            className={styles.label_input}
            type="date"
            id="check-in"
            value={checkInDate}
            onChange={handleCheckInChange}
          />
        </label>
      </form>
      <form className={styles.group}>
        <label className={styles.label} htmlFor="check-out">
          <div className={styles.label_title}> дата выезда</div>
          <Input
            className={styles.label_input}
            type="date"
            id="check-out"
            value={checkOutDate}
            onChange={handleCheckOutChange}
          />
        </label>
      </form>
    </div>
  );
};
