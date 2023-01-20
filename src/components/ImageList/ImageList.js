import React, { useEffect, useState } from "react";
import "./ImageList.scss";
import { getImages } from "../../utils/imagesApi";
import { useNavigate } from "react-router-dom";

function ImageList() {
  const [images, setImages] = useState([]);
  const navigate = useNavigate();

  const onImageClick = (e) => {
    localStorage.imageId = e.target.id;
    navigate("/image-view");
  };

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
            id={image.id}
            onClick={onImageClick}
          />
        ))}
      </div>
    </section>
  );
}

export default ImageList;
