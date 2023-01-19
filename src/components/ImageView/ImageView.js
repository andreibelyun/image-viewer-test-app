import React from "react";
import "./ImageView.scss";
import image from "../../assets/images/image_ex.png";

function ImageView() {
  return (
    <section className="image-view">
      <img className="image-view__image" src={image} alt="..." />
      <div className="image-view__info details">
        <h3 className="details__title">Details</h3>
        <ul className="details__items">
          <li className="details__item">
            <h5 className="details__item-title">Resolution</h5>
            <p className="details__item-text">3840 x 2310</p>
          </li>
          <li className="details__item">
            <h5 className="details__item-title">Author</h5>
            <p className="details__item-text">Lorem Ipsum</p>
          </li>
          <li className="details__item">
            <h5 className="details__item-title">ID</h5>
            <p className="details__item-text">00956</p>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default ImageView;
