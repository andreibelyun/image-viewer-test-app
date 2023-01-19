import React from "react";
import "./ImageList.scss";
import image from "../../assets/images/image_ex.png";

function ImageList() {
  return (
    <section className="image-list">
      <h3 className="image-list__title">All images</h3>
      <div className="image-list__container">
        <img className="image-list__image" src={image} alt="something" />
        <img className="image-list__image" src={image} alt="something" />
        <img className="image-list__image" src={image} alt="something" />
        <img className="image-list__image" src={image} alt="something" />
        <img className="image-list__image" src={image} alt="something" />
        <img className="image-list__image" src={image} alt="something" />
      </div>
    </section>
  );
}

export default ImageList;
