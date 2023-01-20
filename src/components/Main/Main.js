import React from "react";
import ImageList from "../ImageList/ImageList";
import Layout from "../Layout/Layout";
import Promo from "../Promo/Promo";

function Main() {
  return (
    <Layout>
      <Promo />
      <ImageList />
    </Layout>
  );
}

export default Main;
