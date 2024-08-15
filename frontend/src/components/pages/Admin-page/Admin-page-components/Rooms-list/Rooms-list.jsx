import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRooms, roomsSelector } from "../../../../../store/roomsSlice";
import { RoomListItem } from "../Room-list-item/Room-list-item";
import { TABLE_HEAD } from "../../../../../constants";
import styles from "./Rooms-list.module.css";

export const RoomsList = () => {
  const dispatch = useDispatch();
  const roomsList = useSelector(roomsSelector);

  useEffect(() => {
    console.log(roomsList);
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
          <RoomListItem key={room._id} room={room} />
        ))}
      </tbody>
    </table>
  );
};
