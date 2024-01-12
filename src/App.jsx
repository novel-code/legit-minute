import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import AppLayout from "./AppLayout";
import Home from "./Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index path='/' element={<Navigate to={"home"} />} />
            <Route path='home' element={<Home />} />
          </Route>
          <Route path='*' element={<Navigate to={"home"} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
