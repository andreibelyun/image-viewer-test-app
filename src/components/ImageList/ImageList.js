import React, { useEffect, useState } from "react";
import "./ImageList.scss";
import { getImages } from "../../utils/imagesApi";

function ImageList() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    getImages().then((data) => {
      setImages(data);
    });
  }, []);

  return (
    <section className="image-list">
      <h3 className="image-list__title">All images</h3>
      <div className="image-list__container">
        {images.map((image) => (
          <img
            key={image.id}
            className="image-list__image"
            src={image.download_url}
            alt={image.author}
          />
        ))}
      </div>
    </section>
  );
}

export default ImageList;
