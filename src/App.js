import Header from "components/Header";
import Dashboard from "pages/Dashboard";
import * as React from "react";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
     <Header/>
      <Routes>
        <Route path="/" exact element={<Dashboard />} />
        <Route path="/how"  element={<Dashboard />} />
      </Routes>
    </>
  );
}

export default App;
