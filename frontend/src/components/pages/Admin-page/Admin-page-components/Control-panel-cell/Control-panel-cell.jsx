import {
  faFloppyDisk,
  faPen,
  faShareFromSquare,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";

import { IconWrapper } from "../../../../common/IconWrapper/IconWrapper";
import {
  fetchRooms,
  roomsSelector,
  updateRoom,
} from "../../../../../store/roomsSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

export const ControlPanelCell = ({
  setIsEditing,
  isEditing,
  roomId,
  checkArr,
  selectedValue,
  priceValue,
  images,
}) => {
  const dispatch = useDispatch();

  const getCheckedValue = (property) => {
    const { checked } = checkArr.find((item) => item.name === property);
    return checked;
  };

  const saveUpdates = () => {
    console.log(priceValue);
    const newData = {
      type: selectedValue,
      price: priceValue,
      imagesUrl: images,
      hasWifi: getCheckedValue("hasWifi"),
      canSmoke: getCheckedValue("canSmoke"),
      hasConditioner: getCheckedValue("hasConditioner"),
      hasWorkSpace: getCheckedValue("hasWorkSpace"),
      canPets: getCheckedValue("canPets"),
    };

    dispatch(updateRoom({ roomId, roomData: newData }));
    setIsEditing(false);
  };
  const onClickCancel = () => {
    dispatch(fetchRooms());
    setIsEditing(false);
  };
  const deleteRoom = () => {
    console.log("delete");
  };
  return (
    <>
      {isEditing ? (
        <IconWrapper onClick={() => saveUpdates()} icon={faFloppyDisk} />
      ) : (
        <IconWrapper onClick={() => setIsEditing(true)} icon={faPen} />
      )}
      {isEditing ? (
        <IconWrapper onClick={() => onClickCancel()} icon={faShareFromSquare} />
      ) : (
        <IconWrapper onClick={() => deleteRoom()} icon={faTrash} />
      )}
    </>
  );
};
