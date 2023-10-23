import "./App.css";
import Home from "./Pages/Home";
import NavBar from "./Components/NavBar";
import "font-awesome/css/font-awesome.min.css";

function App() {
  return (
    <div className="App bg-white">
      <NavBar />
      <Home />
    </div>
  );
}

export default App;
