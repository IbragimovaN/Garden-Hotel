import { AGE_GROUP } from "../../../constants";
import { Button, Modal } from "../../common";
import { GuestCountLayout } from "../../Guest-count-layout/Guest-count-layout";
import { GuestCount } from "../Guests-count/Guest-count";
import { SearchFormDates } from "../Search-form-dates/Search-form-dates";
import styles from "./Booking-form.module.css";

export const BookingForm = ({ isOpen, number, price, setIsOpen }) => {
  if (!isOpen) {
    return;
  }
  return (
    <Modal setIsOpen={setIsOpen}>
      <form className={styles.bookingForm}>
        <div className={styles.headerForm}>
          <span> №{number}</span>
          <span> {price} в сутки</span>
        </div>
        <SearchFormDates />
        <GuestCountLayout />
        <Button>Забронировать</Button>
      </form>
    </Modal>
  );
};
