import "./App.css";
import { Router,Route,Routes } from "react-router-dom"
import NavBar from "./layout/NavBar/NavBar";
import Home from "./view/Home";
import Login from "./view/Login/index"
function App() {
  return (
  <>
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={Home} />
        <Route path="login" elament={Login} />  
      </Routes>
    </Router>
   </> 
  );
}

export default App;
