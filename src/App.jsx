// import { useState } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Home";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index path='/' element={<Navigate to={"home"} />} />
          <Route path='home' element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
