import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import Navbar from "./components/Navbar/Navbar";
import Episodes from "./Pages/Episodes";
import Location from "./Pages/Location";
import Card from "./components/Card/Card";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";
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
  
  let [fetchedData, updateFetchedData] = useState([]);
  let { results } = fetchedData;
  let api = `https://rickandmortyapi.com/api/character/`;

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      updateFetchedData(data);
    })();
  }, [api]);
  return (
    <div className="App">
      <Card page="/" results={results} />
    </div>
  );
};

export default App;
