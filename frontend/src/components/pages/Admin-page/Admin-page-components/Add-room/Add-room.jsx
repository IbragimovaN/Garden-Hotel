import { useEffect, useState } from "react";
import Dropzone from "react-dropzone";
import { Button } from "../../../../Button/Button";
import axios from "axios";

export const AddRoom = () => {
  const [data, setData] = useState({
    number: 11,
    type: "СТАНДАРТ",
    price: 5000,
    rate: 5,
  });
  const [imagesUrl, setImagesUrl] = useState([]);

  useEffect(() => {
    console.log(imagesUrl);
  }, [imagesUrl]);

  const onChange = (event) => {
    const { name, value } = event.target;
    setData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const onSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    for (let i = 0; i < imagesUrl.length; i++) {
      formData.append("imagesUrl", imagesUrl[i]);
    }

    const postData = {
      ...data,
      imagesUrl,
    };
    for (const key in postData) {
      formData.append(key, postData[key]);
    }

    try {
      await axios.post("http://localhost:3004/rooms", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
    } catch (e) {
      console.log(e);
    }
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
        номер
        <input
          style={{ border: "1px solid black" }}
          value={data.number}
          name="number"
          onChange={onChange}
        />
        тип
        <input
          style={{ border: "1px solid black" }}
          value={data.type}
          name="type"
          onChange={onChange}
        />
        цена
        <input
          style={{ border: "1px solid black" }}
          value={data.price}
          name="price"
          onChange={onChange}
        />
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
            {imagesUrl.map(
              (img) => console.log(img)
              // <img
              //   key={img.path}
              //   src={imagesUrl[img].path}
              //   alt="img"
              //   style={{ maxWidth: "200px" }}
              // />
            )}
          </div>
        )}
        <Button type="submit">Отправить</Button>
      </form>
    </div>
  );
};
