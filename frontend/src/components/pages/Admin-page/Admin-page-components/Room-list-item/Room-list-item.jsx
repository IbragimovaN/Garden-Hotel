import { useEffect, useState } from "react";
import { Button } from "../../../../common/Button/Button";
import { ControlPanelCell } from "../Control-panel-cell/Control-panel-cell";
import { ImagesCell } from "../Images-cell/Images-cell";
import { ComfortsCell } from "../Comforts-cell/Comforts-cell";
import { TypeRoomCell } from "../Type-room-cell/Type-room-cell";
import styles from "./Room-list-item.module.css";
import { COMFORTS_CHECKLIST } from "../../../../../constants";
import Input from "../../../../common/Input/Input";

export const RoomListItem = ({
  id,
  number,
  type,
  price,
  rate,
  imagesUrl,
  comfortsObj,
  maxAdult,
  maxChildren,
}) => {
  const [selectedValue, setSelectedValue] = useState(type);
  const [isEditing, setIsEditing] = useState(false);
  const [priceValue, setPriceValue] = useState(price);
  const [maxAdultValue, setMaxAdultValue] = useState(maxAdult);
  const [maxChildrenValue, setMaxChildrenValue] = useState(maxChildren);

  const [checkArr, setCheckArr] = useState(COMFORTS_CHECKLIST);

  useEffect(() => {
    const checkArrNew = checkArr.map((item) => {
      for (const key in comfortsObj) {
        if (item.name === key) {
          return { ...item, checked: comfortsObj[key] };
        }
      }
      return item;
    });
    setCheckArr(checkArrNew);
  }, []);

  return (
    <tr>
      <td>{number}</td>
      <td>
        <TypeRoomCell
          isEditing={isEditing}
          selectedValue={selectedValue}
          setSelectedValue={setSelectedValue}
          type={type}
        />
      </td>
      <td>
        {isEditing ? (
          <Input
            className={styles.input}
            onChange={(e) => setPriceValue(e.target.value)}
            value={priceValue}
          />
        ) : (
          <span>{price}</span>
        )}
      </td>
      <td>{rate}</td>
      <td>
        {isEditing ? (
          <Input
            className={styles.input}
            onChange={(e) => setMaxAdultValue(e.target.value)}
            value={maxAdultValue}
          />
        ) : (
          <span>{maxAdult}</span>
        )}
      </td>
      <td>
        {isEditing ? (
          <Input
            className={styles.input}
            onChange={(e) => setMaxChildrenValue(e.target.value)}
            value={maxChildrenValue}
          />
        ) : (
          <span>{maxChildren}</span>
        )}
      </td>
      <td className={styles.comfortCell}>
        <ComfortsCell
          isEditing={isEditing}
          checkArr={checkArr}
          setCheckArr={setCheckArr}
        />
      </td>
      <td className={styles.imagesCell}>
        <ImagesCell isEditing={isEditing} imagesUrl={imagesUrl} id={id} />
      </td>
      <td>
        <Button>Бронирования</Button>
      </td>
      <td style={{ width: "100px" }}>
        <ControlPanelCell
          isEditing={isEditing}
          setIsEditing={setIsEditing}
          roomId={id}
          selectedValue={selectedValue}
          priceValue={priceValue}
          checkArr={checkArr}
          images={imagesUrl.map((images) => images)}
          maxAdult={maxAdultValue}
          maxChildren={maxChildrenValue}
        />
      </td>
    </tr>
  );
};
