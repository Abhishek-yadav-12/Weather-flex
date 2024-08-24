import React from "react";
import CurrentLocation from "./currentLocation";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <div className="container">
        <CurrentLocation />
      </div>
      <div className="footer-info">
        
       Made with 🩵
        <a target="_blank" rel="noopener noreferrer" href="https://github.com/Abhishek-yadav-12">
          Abhishek Yadav
        </a>
       
      </div>
    </React.Fragment>
  );
}

export default App;
