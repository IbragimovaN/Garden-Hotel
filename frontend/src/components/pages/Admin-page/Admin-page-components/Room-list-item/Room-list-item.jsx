import { useState } from "react";
import { Button } from "../../../../common/Button/Button";
import { ControlPanelCell } from "../Control-panel-cell/Control-panel-cell";
import { ImagesCell } from "../Images-cell/Images-cell";
import { ComfortsCell } from "../Comforts-cell/Comforts-cell";
import { TypeRoomCell } from "../Type-room-cell/Type-room-cell";
import styles from "./Room-list-item.module.css";

export const RoomListItem = ({ room }) => {
  const {
    _id,
    number,
    type,
    price,
    rate,
    imagesUrl,
    hasWifi,
    canSmoke,
    hasConditioner,
    hasWorkSpace,
    canPets,
  } = room;

  const [selectedValue, setSelectedValue] = useState(type);
  const [isEditing, setIsEditing] = useState(false);
  const [priceValue, setPriceValue] = useState(price);

  const [checkArr, setCheckArr] = useState([
    { name: "hasWifi", checked: hasWifi, text: " Есть Wi-fi" },
    { name: "hasConditioner", checked: hasConditioner, text: " Кондиционер" },
    {
      name: "hasWorkSpace",
      checked: hasWorkSpace,
      text: " Рабочее пространство",
    },
    {
      name: "canSmoke",
      checked: canSmoke,
      text: " Можно курить",
    },
    {
      name: "canPets",
      checked: canPets,
      text: " Можно с животными",
    },
  ]);

  return (
    <tr>
      <td
        contentEditable={isEditing ? true : false}
        suppressContentEditableWarning={isEditing ? true : false}
      >
        {number}
      </td>
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
          <input
            onChange={(e) => setPriceValue(e.target.value)}
            value={priceValue}
          />
        ) : (
          <span>{price}</span>
        )}
      </td>
      <td>{rate}</td>
      <td className={styles.comfortCell}>
        <ComfortsCell
          isEditing={isEditing}
          checkArr={checkArr}
          setCheckArr={setCheckArr}
        />
      </td>
      <td className={styles.imagesCell}>
        <ImagesCell isEditing={isEditing} imagesUrl={imagesUrl} id={_id} />
      </td>
      <td>
        <Button>Бронирования</Button>
      </td>
      <td style={{ width: "100px" }}>
        <ControlPanelCell
          isEditing={isEditing}
          setIsEditing={setIsEditing}
          roomId={_id}
          selectedValue={selectedValue}
          priceValue={priceValue}
          checkArr={checkArr}
          images={imagesUrl.map((images) => images)}
        />
      </td>
    </tr>
  );
};
