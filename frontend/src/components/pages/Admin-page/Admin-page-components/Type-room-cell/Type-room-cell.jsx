import { TYPES_ROOM_GROUP } from "../../../../../constants";
import styles from "./Type-room-cell.module.css";
export const TypeRoomCell = ({
  isEditing,
  selectedValue,
  setSelectedValue,
  type,
}) => {
  const onSelectedProductChange = ({ target }) => {
    setSelectedValue(target.value);
  };
  return (
    <>
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
    </>
  );
};
