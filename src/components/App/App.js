import { useEffect, useState } from "react";
import "./App.scss";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import CurrentUserContext from "../../context/CurrentUserContext";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Main from "../Main/Main";
import ImageView from "../ImageView/ImageView";
import Login from "../Login/Login";
import { isExistingUser } from "../../utils/auth";

function App() {
  const defaultUser = { loggedIn: false };
  const [currentUser, setCurrentUser] = useState(defaultUser);

  const location = useLocation();
  const navigate = useNavigate();

  const onLogin = (name, password) => {
    if (isExistingUser(name, password)) {
      setCurrentUser({ name, loggedIn: true });
      localStorage.user = JSON.stringify({ name, loggedIn: true });
      navigate("/");
    } else {
      throw new Error("Wrong name or password");
    }
  };

  const onLogout = () => {
    setCurrentUser(defaultUser);
    localStorage.clear();
    navigate("/login");
  };

  useEffect(() => {
    localStorage.user
      ? setCurrentUser(JSON.parse(localStorage.user))
      : setCurrentUser(defaultUser);
    navigate(location.pathname);
  }, []);

  return (
    <div className="app">
      <CurrentUserContext.Provider value={{ currentUser, onLogout }}>
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
          <Route path="/login" element={<Login onLogin={onLogin} />} />
        </Routes>
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
