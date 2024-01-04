import "./App.css";
import { Router,Route,Routes } from "react-router-dom"
import NavBar from "./layout/NavBar/NavBar";
import Home from "./view/Home"

function App() {
  return (
    
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={Home} />
      </Routes>
    </Router>
  );
}

export default App;
