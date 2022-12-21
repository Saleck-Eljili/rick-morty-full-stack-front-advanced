import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Episodes from "./Pages/Episodes";
import Location from "./Pages/Location";
function App() {
  return(
    <Router>
      <div className="App">
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/episodes" element={<Episodes />} />

        <Route path="/location" element={<Location />} />
      
      </Routes>
    </Router>
  );
}

const Home = () => {
  return (
    <div className="App">
      home
    </div>
  );
};

export default App;
