import React, { useRef } from "react";
import ImageList from "../ImageList/ImageList";
import Layout from "../Layout/Layout";
import Promo from "../Promo/Promo";

function Main() {
  const imageListRef = useRef(null);
  const scrollToRef = () => {
    imageListRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <Layout>
      <Promo onScrollDownClick={scrollToRef} />
      <ImageList ref={imageListRef} />
    </Layout>
  );
}

export default Main;
