import { useEffect, useState } from "react";
import styles from "./Slider-img.module.css";
import { IconWrapper } from "../IconWrapper/IconWrapper";
import { faCaretRight, faCaretLeft } from "@fortawesome/free-solid-svg-icons";

export const SliderImg = ({ imgArr }) => {
  const [count, setCount] = useState(0);

  return (
    <div className={styles.imgWrapper}>
      <img
        className={styles.img}
        src={`http://localhost:3004/${imgArr[count]}`}
      />

      {count > 0 && (
        <IconWrapper
          icon={faCaretLeft}
          className={styles.leftArrow}
          onClick={() => setCount(count - 1)}
        />
      )}
      {count < imgArr.length - 1 && (
        <IconWrapper
          icon={faCaretRight}
          className={styles.rightArrow}
          onClick={() => setCount(count + 1)}
        />
      )}
    </div>
  );
};
