import "./App.scss";
import Login from "../Login/Login";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Promo from "../Promo/Promo";
import ImageList from "../ImageList/ImageList";

function App() {
  return (
    <>
      <div className="app">
        <Header />
        <Promo />
        <ImageList />
        <Footer />
      </div>
      {/* <Login /> */}
    </>
  );
}

export default App;
