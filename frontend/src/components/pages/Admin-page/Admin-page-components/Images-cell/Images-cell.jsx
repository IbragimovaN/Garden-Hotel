import { useEffect, useState } from "react";
import styles from "./Images-cell.module.css";
import { Button } from "../../../../common/Button/Button";
import { IconWrapper } from "../../../../common/IconWrapper/IconWrapper";
import { AddImage } from "../../../../common";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { Image } from "../Image/Image";

export const ImagesCell = ({ isEditing, imagesUrl, id }) => {
  const [isOpenAddImgField, setIsOpenAddImgField] = useState(false);
  const [isOpenImg, setIsOpenImg] = useState(false);

  useEffect(() => {
    console.log(imagesUrl);
  }, [imagesUrl]);
  return (
    <>
      <div className={styles.imagesCell_row}>
        {" "}
        Фото
        {isEditing && (
          <Button
            styleType="sircle"
            onClick={() => {
              setIsOpenAddImgField(!isOpenAddImgField);
            }}
          >
            +
          </Button>
        )}
      </div>
      <IconWrapper
        onClick={() => setIsOpenImg(!isOpenImg)}
        icon={isOpenImg ? faChevronUp : faChevronDown}
      />
      {imagesUrl && isOpenImg && (
        <>
          <div className={styles.images}>
            {imagesUrl.map((image) => (
              <Image key={image} image={image} isEditing={isEditing} id={id} />
            ))}
          </div>
          <div>{isEditing && isOpenAddImgField && <AddImage id={id} />}</div>
        </>
      )}
    </>
  );
};
