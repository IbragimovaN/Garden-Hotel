import { useEffect, useState } from "react";
import { InputCheckbox, IconWrapper } from "../../../../common";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import styles from "./Comforts-cell.module.css";

export const ComfortsCell = ({ isEditing, checkArr, setCheckArr }) => {
  const [isOpenComfortsList, setIsOpenComfortsList] = useState(false);

  const onChangeCheck = (index, checked) => {
    const updatedArr = checkArr.map((item, idx) => {
      if (idx === Number(index)) {
        return { ...item, checked: checked };
        // return { ...item, checked: !item.checked };
      } else {
        return item;
      }
    });

    setCheckArr(updatedArr);
  };
  return (
    <>
      {" "}
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
    </>
  );
};
