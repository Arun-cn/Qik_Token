import "./App.css";
import { Route,Routes } from "react-router-dom"
import NavBar from "./layout/NavBar/NavBar";
import Home from "./view/Home/index";
import Login from "./view/Login/index"
import Register from "./view/Register/index"
function App() {
  return (
  <>
      <Routes>
        <Route path="/" element={<NavBar />} >
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
      </Routes>
   </> 
  );
}

export default App;
