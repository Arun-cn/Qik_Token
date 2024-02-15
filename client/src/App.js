import "./App.css";
import { Route, Routes } from "react-router-dom";
import NavBar from "./layout/NavBar/NavBar";
import Home from "./view/Home/index";
import Login from "./view/Login/index";
import Register from "./view/Register/index";
import PrivateRoute from "./routes/PrivateRoute";
import DashBoard from "./view/DashBoard/DashBoard";
import Profile from "./view/Profile/Profile";

function App() {
  return (
    <>
      <Routes>
        <Route element={<PrivateRoute />}>
          <Route path="/" element={<Home />}>
            <Route path="dashboard" element={<DashBoard />} />
            <Route path="profile" element={<Profile />} />
          </Route>
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
}

export default App;
