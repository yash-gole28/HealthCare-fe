import { useEffect } from "react";

import "./App.css";
import "./index.css";
import { GET } from "./services/methods";


function App() {

  const getData = async () => {
    try {

      const response = await GET(
        "/test"
      );

      console.log("API Response:", response);

    } catch (error) {

      console.log("API Error:", error);

    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <h1 className="text-slate-400">
        Hello there
      </h1>
    </>
  );
}

export default App;