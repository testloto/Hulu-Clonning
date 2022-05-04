// import React from "react";
import React,{useState} from "react";
import "./App.css";
import Header from "./Header";
import Nav from "./Nav";
import Results from "./Results";
import requests from "./requests";

function App() {
  const [selectedOption , setSelectedOption] = useState(requests.fetchTrending);
  return (
    <div className="app">
      <Header />

      {/* Header */}

      {/* Nav */}
      <Nav setSelectedOption={setSelectedOption}/>

      <Results selectedOption={selectedOption} />

      {/* Results */}
    </div>
  );
}
export default App;
