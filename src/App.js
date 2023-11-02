import "./App.css";
import Home from "./Pages/Home";
import NavBar from "./Components/NavBar";
import "font-awesome/css/font-awesome.min.css";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App bg-white">
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
