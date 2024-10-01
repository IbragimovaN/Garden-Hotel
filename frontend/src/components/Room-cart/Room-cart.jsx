import { useState } from "react";
import { Button, Rating } from "../common";
import { SliderImg } from "../common/Slider-img/Slider-img";
import styles from "./Room-cart.module.css";
import { BookingForm } from "../forms";
export const RoomCart = ({ room }) => {
  const [isOpenBokkingForm, setIsOpenBokkingForm] = useState(false);
  return (
    <div className={styles.cart}>
      <SliderImg imgArr={room.imagesUrl} />
      <div className={styles.typeRoomRow}>{room.type}</div>

      <div className={styles.info}>
        <div className={styles.row}>
          <div> №{room.number}</div>
          <div>{room.price} в сутки</div>
        </div>
        <Rating rating={room.rate} isOpenCommentField={false} />
        <Button
          styleType={"miniSquare"}
          onClick={() => setIsOpenBokkingForm(true)}
        >
          Забронировать
        </Button>
      </div>
      <BookingForm
        isOpen={isOpenBokkingForm}
        number={room.number}
        price={room.price}
        setIsOpen={setIsOpenBokkingForm}
      ></BookingForm>
    </div>
  );
};
