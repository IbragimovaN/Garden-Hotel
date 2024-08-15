import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import styles from "./Images-cell.module.css";
import { IconWrapper } from "../../../../IconWrapper/IconWrapper";
import { useDispatch } from "react-redux";
import { deleteImg } from "../../../../../store/roomsSlice";
import { useState } from "react";

export const ImagesCell = ({ id, isEditing, image }) => {
  const dispatch = useDispatch();

  const onClickDeleteImg = (id, img) => {
    dispatch(deleteImg({ id, img }));
  };
  return (
    <div className={styles.imgWrapper}>
      {" "}
      <img
        className={styles.img}
        src={`http://localhost:3004/${image}`}
        alt="Room Image"
      ></img>
      {isEditing && (
        <IconWrapper
          className={styles.delete}
          onClick={(e) => onClickDeleteImg(id, image)}
          icon={faCircleXmark}
        />
      )}
    </div>
  );
};
