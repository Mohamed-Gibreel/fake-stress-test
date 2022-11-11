import logo from "./logo.svg";
import "./App.css";

import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [numOfSuccess, setNumOfSuccess] = useState(0);
  const [errorCounter, setErrorCounter] = useState(0);
  const [errorMessages, setErrorMessages] = useState([]);

  useEffect(() => {
    setInterval(async () => {
      try {
        await fetch("https://apim.dct.gov.ae/ubfpos/api/InitialRequest");
        setNumOfSuccess((o) => o + 1);
      } catch (e) {
        setErrorCounter((o) => o + 1);
        setErrorMessages((o) => [...o, e]);
      }
    }, 1000);
  }, []);

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div>Success: {numOfSuccess}</div>
      <div>Error: {errorCounter}</div>
    </div>
  );
}

export default App;
