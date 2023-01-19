import "./App.scss";
import Login from "../Login/Login";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Promo from "../Promo/Promo";

function App() {
  return (
    <>
      <div className="app">
        <Header />
        <Promo />
        <div className="app-main">a</div>
        <Footer />
      </div>
      <Login />
    </>
  );
}

export default App;
