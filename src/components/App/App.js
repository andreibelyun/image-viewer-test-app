import "./App.scss";
import Login from "../Login/Login";
import ImageView from "../ImageView/ImageView";
import { Routes, Route } from "react-router-dom";
import Main from "../Main/Main";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <Main />
            </PrivateRoute>
          }
        />
        <Route
          path="/image-view"
          element={
            <PrivateRoute>
              <ImageView />
            </PrivateRoute>
          }
        />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
