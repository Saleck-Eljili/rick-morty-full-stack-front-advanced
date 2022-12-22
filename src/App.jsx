import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useState, useEffect ,  Suspense } from "react";
const Navbar = React.lazy(() => import('./components/Navbar/Navbar'));
const Episodes = React.lazy(() => import('./Pages/Episodes'));
const Location = React.lazy(() => import('./Pages/Location'));
const Card = React.lazy(() => import('./components/Card/Card'));
const CardDetails = React.lazy(() => import('./components/Card/CardDetails'));
const Search = React.lazy(() => import('./components/Search/Search'));
const Pagination = React.lazy(() => import('./components/Pagination/Pagination'));
const Filter = React.lazy(() => import('./components/Filter/Filter'));
function App() {
  return(
    <Suspense fallback={<div><div class="spinner-border" role="status">
    <span class="sr-only"></span>
  </div><b>Loanding ...</b></div>}>
    <Router>
      <div className="App">
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<CardDetails />} />

        <Route path="/episodes" element={<Episodes />} />
        <Route path="/episodes/:id" element={<CardDetails />} />

        <Route path="/location" element={<Location />} />
        <Route path="/location/:id" element={<CardDetails />} />
      </Routes>
    </Router>
    </Suspense>
  );
}

const Home = () => {
  
  let [pageNumber, updatePageNumber] = useState(1);
  let [status, updateStatus] = useState("");
  let [gender, updateGender] = useState("");
  let [species, updateSpecies] = useState("");
  let [fetchedData, updateFetchedData] = useState([]);
  let [search, setSearch] = useState("");
  let { info, results } = fetchedData;

  let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}&status=${status}&gender=${gender}&species=${species}`;

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      updateFetchedData(data);
    })();
  }, [api]);
  return (
    <div className="App">
      <h1 className="text-center mb-3">Characters</h1>
      <Search setSearch={setSearch} updatePageNumber={updatePageNumber} />
      <div className="container">
        <div className="row">
          <Filter
            pageNumber={pageNumber}
            status={status}
            updateStatus={updateStatus}
            updateGender={updateGender}
            updateSpecies={updateSpecies}
            updatePageNumber={updatePageNumber}
          />
          <div className="col-lg-8 col-12">
            <div className="row">
              <Card page="/" results={results} />
            </div>
          </div>
        </div>
      </div>
      <Pagination
        info={info}
        pageNumber={pageNumber}
        updatePageNumber={updatePageNumber}
      />
    </div>
  );
};

export default App;
