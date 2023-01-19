import React from "react";
import "./Promo.scss";
import graffiti from "../../assets/images/promo-graffiti.png";

function Promo() {
  return (
    <section className="promo">
      <div className="promo__left">
        <h2 className="promo__title">Lorem ipsum dolor sit amet</h2>
        <p className="promo__text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </p>
        <button className="promo__scroll-down">to pictures</button>
      </div>
      <div className="promo__right">
        <div className="promo__image">
          <img className="promo__graffiti" src={graffiti} alt="graffiti" />
        </div>
      </div>
    </section>
  );
}

export default Promo;
