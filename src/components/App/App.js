import "./App.scss";
import Login from "../Login/Login";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Promo from "../Promo/Promo";
import ImageList from "../ImageList/ImageList";
import ImageView from "../ImageView/ImageView";

function App() {
  return (
    <>
      <div className="app">
        <Header />
        <ImageView />
        <Promo />
        <ImageList />
        <Footer />
      </div>
      {/* <Login /> */}
    </>
  );
}

export default App;
