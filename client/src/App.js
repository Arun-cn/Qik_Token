import "./App.css";
import { Route, Routes } from "react-router-dom";
import NavBar from "./layout/NavBar/NavBar";
import Home from "./view/Home/index";
import Login from "./view/Login/index";
import Register from "./view/Register/index";
import PrivateRoute from "./routes/PrivateRoute";
import DashBoard from "./view/DashBoard/DashBoard";
import Profile from "./view/Profile/Profile";
import Tokens from "./view/Tokens/index"
import Queues from "./view/Queues/index"
import Display from "./view/Display/index"

function App() {
  return (
    <>
      <Routes>
        <Route element={<PrivateRoute />}>
          <Route path="/" element={<Home />}>
            <Route path="dashboard" element={<DashBoard />} />
            <Route path="profile" element={<Profile />} />
            <Route path="/tokens" element={<Tokens />} />
            <Route path="/queues" element={<Queues />} />
            <Route path="/display" element={<Display />} />
          </Route>
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
}

export default App;
