import React, { useEffect, useState } from "react";
import "./ImageView.scss";
import Layout from "../Layout/Layout";
import { getImageInfo } from "../../utils/imagesApi";

function ImageView() {
  const [image, setImage] = useState({});

  useEffect(() => {
    getImageInfo(1).then((data) => {
      setImage(data);
    });
  }, []);

  return (
    <Layout>
      <section className="image-view">
        <img
          className="image-view__image"
          src={image.download_url}
          alt={image.author}
        />
        <div className="image-view__info details">
          <h3 className="details__title">Details</h3>
          <ul className="details__items">
            <li className="details__item">
              <h5 className="details__item-title">Resolution</h5>
              <p className="details__item-text">{`${image.width} x ${image.height}`}</p>
            </li>
            <li className="details__item">
              <h5 className="details__item-title">Author</h5>
              <p className="details__item-text">{image.author}</p>
            </li>
            <li className="details__item">
              <h5 className="details__item-title">ID</h5>
              <p className="details__item-text">{image.id}</p>
            </li>
          </ul>
        </div>
      </section>
    </Layout>
  );
}

export default ImageView;
