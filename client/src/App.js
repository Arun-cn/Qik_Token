import "./App.css";
import { Router,Route,Routes } from "react-router-dom"
import {NavBar} from "./layout/NavBar/NavBar";
function App() {
  return (
    
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={''} />
      </Routes>
    </Router>
  );
}

export default App;
