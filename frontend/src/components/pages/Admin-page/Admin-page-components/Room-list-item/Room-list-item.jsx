import { useState } from "react";
import { Button } from "../../../../Button/Button";
import styles from "./Room-list-item.module.css";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { InputCheckbox } from "../../../../InputCheckbox/InputCheckbox";
import { TYPES_ROOM_GROUP } from "../../../../../constants";
import { ImagesCell } from "../Images-cell/Images-cell";
import { ControlPanel } from "../Control-panel/Control-panel";
import { IconWrapper } from "../../../../IconWrapper/IconWrapper";

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

  const [isOpenComfortsList, setIsOpenComfortsList] = useState(false);
  const [isOpenImg, setIsOpenImg] = useState(false);
  const [selectedValue, setSelectedValue] = useState(type);
  const [isEditing, setIsEditing] = useState(false);
  const [priceValue, setPriceValue] = useState(price);

  const onSelectedProductChange = ({ target }) => {
    setSelectedValue(target.value);
  };

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

  const onChangeCheck = (index) => {
    const updatedArr = checkArr.map((item, idx) => {
      if (idx === Number(index)) {
        return { ...item, checked: !item.checked };
      } else {
        return item;
      }
    });

    setCheckArr(updatedArr);
  };

  return (
    <tr>
      <td
        contentEditable={isEditing ? true : false}
        suppressContentEditableWarning={isEditing ? true : false}
      >
        {number}
      </td>
      <td>
        {isEditing ? (
          <select value={selectedValue} onChange={onSelectedProductChange}>
            {Object.keys(TYPES_ROOM_GROUP).map((key) => (
              <option key={key} value={key}>
                {TYPES_ROOM_GROUP[key]}
              </option>
            ))}
          </select>
        ) : (
          <>{type}</>
        )}
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
        Удобства
        <IconWrapper
          onClick={() => setIsOpenComfortsList(!isOpenComfortsList)}
          icon={isOpenComfortsList ? faChevronUp : faChevronDown}
        />
        {isOpenComfortsList && (
          <div className={styles.comfortList}>
            {checkArr.map((item, index) => (
              <InputCheckbox
                key={item.name}
                checked={item.checked}
                text={item.text}
                id={index}
                isEditing={isEditing}
                onChange={onChangeCheck}
              />
            ))}
          </div>
        )}
      </td>
      <td className={styles.imagesCell}>
        <IconWrapper
          onClick={() => setIsOpenImg(!isOpenImg)}
          icon={isOpenImg ? faChevronUp : faChevronDown}
        />
        {imagesUrl && isOpenImg && (
          <div className={styles.images}>
            {imagesUrl.map((image) => (
              <ImagesCell
                key={image}
                image={image}
                isEditing={isEditing}
                id={_id}
              />
            ))}
          </div>
        )}
      </td>
      <td>
        <Button>Бронирования</Button>
      </td>
      <td style={{ width: "100px" }}>
        <ControlPanel
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
