import { useDispatch, useSelector } from "react-redux";
import { Container } from "../../Container/Container";
import styles from "./Booking-page.module.css";
import { fetchRooms, roomsSelector } from "../../../store/roomsSlice";
import { RoomCart } from "../../Room-cart/Room-cart";
import { useEffect } from "react";

export const BookingPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRooms());
  }, []);
  const rooms = useSelector(roomsSelector);
  return (
    <Container>
      <div className={styles.bookingPage}>
        <div className={styles.searchAndFilterPanel}>форма поиска номеров</div>
        <div className={styles.searchField}>
          {" "}
          <div>поиск</div>
          <div>сортировка</div>
        </div>
        <div className={styles.rommsList}>
          {rooms.map((room) => (
            <RoomCart key={room._id} room={room} />
          ))}
        </div>
      </div>
    </Container>
  );
};
