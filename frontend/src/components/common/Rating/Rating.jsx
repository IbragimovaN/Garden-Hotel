import { IconWrapper } from "../IconWrapper/IconWrapper";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import styles from "./Rating.module.css";
import { useState } from "react";

export const Rating = ({ rating }) => {
  const isOpenCommentField = true;
  const [currentStar, setCurrentStar] = useState(0);
  const [hoverStar, setHoverStar] = useState(0);
  const arrStars = Array(isOpenCommentField ? 5 : rating).fill(0);

  return (
    <div className={styles.ratingRow}>
      {arrStars.map((item, index) => {
        const cuurentStyle = index <= currentStar ? { color: "gold" } : {};
        const hoverStyle = index <= hoverStar ? { color: "gold" } : {};

        return (
          <IconWrapper
            key={index}
            icon={faStar}
            onClick={isOpenCommentField ? () => setCurrentStar(index) : ""}
            style={isOpenCommentField ? { ...cuurentStyle, ...hoverStyle } : ""}
            onMouseMove={isOpenCommentField ? () => setHoverStar(index) : ""}
            onMouseOver={isOpenCommentField ? () => setHoverStar(index) : ""}
          />
        );
      })}
      {currentStar}
    </div>
  );
};
