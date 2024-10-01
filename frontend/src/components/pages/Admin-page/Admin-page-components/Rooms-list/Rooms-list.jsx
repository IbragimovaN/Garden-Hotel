import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRooms, roomsSelector } from "../../../../../store/roomsSlice";
import { RoomListItem } from "../Room-list-item/Room-list-item";
import { TABLE_HEAD } from "../../../../../constants";
import styles from "./Rooms-list.module.css";

export const RoomsList = () => {
  const dispatch = useDispatch();
  const roomsList = useSelector(roomsSelector);

  useEffect(() => {
    dispatch(fetchRooms());
  }, []);

  return (
    <table className={styles.table}>
      <thead>
        <tr>
          {TABLE_HEAD.map((item) => (
            <td key={item}>{item}</td>
          ))}
        </tr>
      </thead>
      <tbody>
        {roomsList.map((room) => (
          <RoomListItem
            key={room._id}
            id={room._id}
            number={room.number}
            type={room.type}
            price={room.price}
            rate={room.rate}
            maxAdult={room.maxAdult}
            maxChildren={room.maxChildren}
            imagesUrl={room.imagesUrl}
            comfortsObj={{
              hasWifi: room.hasWifi,
              hasConditioner: room.hasConditioner,
              hasWorkSpace: room.hasWorkSpace,
              canSmoke: room.canSmoke,
              canPets: room.canPets,
            }}
          />
        ))}
      </tbody>
    </table>
  );
};
