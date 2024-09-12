import { useEffect, useState } from "react";
import Dropzone from "react-dropzone";
import { Button } from "../Button/Button";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addImageToRoom, addImg } from "../../../store/roomsSlice";

export const AddImage = ({ id }) => {
  const [imagesUrl, setImagesUrl] = useState([]);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   console.log(imagesUrl);
  // }, [imagesUrl]);

  const onSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    for (let i = 0; i < imagesUrl.length; i++) {
      formData.append("imagesUrl", imagesUrl[i]);
    }

    await dispatch(addImageToRoom({ roomId: id, formData }));

    // try {
    //   await axios.patch(
    //     `http://localhost:3004/rooms/${id}/imagesUrl`,
    //     formData
    //   );
    // } catch (e) {
    //   console.log(e);
    // }
  };
  const handleDrop = (acceptedFiles) => {
    setImagesUrl(acceptedFiles);
  };

  return (
    <div style={{ margin: "20px" }}>
      <form
        onSubmit={onSubmit}
        style={{ display: "flex", flexDirection: "column" }}
      >
        <Dropzone onDrop={(acceptedFiles) => handleDrop(acceptedFiles)}>
          {({ getRootProps, getInputProps }) => (
            <section>
              <div
                style={{ border: "1px solid black", padding: "20px" }}
                {...getRootProps()}
              >
                <input
                  {...getInputProps()}
                  style={{
                    display: "block",
                    border: "1px dashed gray",
                    padding: "20px",
                  }}
                  type="file"
                  accept="image/*"
                  multiple
                />
                <p>Перетащите или загрузите файлы</p>
              </div>
            </section>
          )}
        </Dropzone>
        {imagesUrl.length > 0 && (
          <div>
            {imagesUrl.map((img) => (
              <img
                key={img.path}
                src={URL.createObjectURL(img)}
                alt="img"
                style={{ maxWidth: "200px", maxHeight: "200px" }}
              />
            ))}
          </div>
        )}
        <Button type="submit">Отправить</Button>
      </form>
    </div>
  );
};
