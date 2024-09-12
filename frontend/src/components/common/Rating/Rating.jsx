import { IconWrapper } from "../IconWrapper/IconWrapper";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import styles from "./Rating.module.css";
import { useState } from "react";

export const Rating = ({ rating, isOpenCommentField }) => {
  const [currentStar, setCurrentStar] = useState(0);
  const [hoverStar, setHoverStar] = useState(0);
  const arrStars = Array(isOpenCommentField ? 5 : rating).fill(0);

  const onClickStar = (index) => {
    if (isOpenCommentField) {
      setCurrentStar(index);
    }
  };

  const onMouseMove = (index) => {
    if (isOpenCommentField) {
      setHoverStar(index);
    }
  };

  const onMouseOver = (index) => {
    if (isOpenCommentField) {
      setHoverStar(index);
    }
  };

  return (
    <div className={styles.ratingRow}>
      {arrStars.map((item, index) => {
        const cuurentStyle =
          index <= currentStar ? { color: "gold" } : { color: "#eaecef" };
        const hoverStyle = index <= hoverStar ? { color: "gold" } : {};

        return (
          <IconWrapper
            key={index}
            icon={faStar}
            onClick={() => onClickStar(index)}
            style={
              isOpenCommentField
                ? { ...cuurentStyle, ...hoverStyle }
                : { color: "gold" }
            }
            onMouseMove={() => onMouseMove(index)}
            onMouseOver={() => onMouseOver(index)}
          />
        );
      })}
    </div>
  );
};
