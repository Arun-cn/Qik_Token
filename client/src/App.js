import "./App.css";
import { Route,Routes } from "react-router-dom"
import NavBar from "./layout/NavBar/NavBar";
import Home from "./view/Home";
import Login from "./view/Login/index"
function App() {
  return (
  <>
      <NavBar />
      <Routes>
        <Route path="/" element={Home} />
        <Route path="login" elament={Login} />  
      </Routes>
   </> 
  );
}

export default App;
