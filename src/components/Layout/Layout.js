import React from "react";
import "./Layout.scss";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

function Layout({ children }) {
  return (
    <>
      <Header />
      <main className="layout__main">{children}</main>
      <Footer />
    </>
  );
}

export default Layout;
