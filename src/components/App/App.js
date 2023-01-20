import "./App.scss";
import Login from "../Login/Login";

import ImageView from "../ImageView/ImageView";
import { Routes, Route } from "react-router-dom";
import Main from "../Main/Main";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/image-view" element={<ImageView />} />
      </Routes>
    </div>
  );
}

export default App;
