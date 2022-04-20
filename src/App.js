import React from "react";
import { Route, Routes } from "react-router";
import Countries from "./pages/Countries";
import Country from "./pages/Country";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Countries />} />

      <Route path="/country/:countryId" element={<Country />} />
    </Routes>
  );
};

export default App;
