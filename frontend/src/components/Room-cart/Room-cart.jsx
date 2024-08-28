import { Rating } from "../common";
import { SliderImg } from "../common/Slider-img/Slider-img";
import styles from "./Room-cart.module.css";
export const RoomCart = ({ room }) => {
  return (
    <div className={styles.cart}>
      <SliderImg imgArr={room.imagesUrl} />
      <div className={styles.typeRoomRow}>{room.type}</div>
      <div className={styles.row}>
        <div> №{room.number}</div>
        <div>{room.price} в сутки</div>
      </div>
      <div>
        <Rating rating={room.rate} />
      </div>
    </div>
  );
};
