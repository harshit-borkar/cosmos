import React from "react";
import { Routes, Route } from "react-router-dom";
// import { BrowserRouter as Router, Route } from "react-router-dom";

import { Results } from "./Results";
import { Search } from "./Search";

export const Ways = () => {
  return (
    <div className="p-4">
      <Routes>
        <Route path="/" element={<Results />} />
        <Route path="/search" element={<Results />} />
        <Route path="/images" element={<Results />} />
        <Route path="/news" element={<Results />} />
        <Route path="/videos" element={<Results />} />
      </Routes>
    </div>
  );
};
