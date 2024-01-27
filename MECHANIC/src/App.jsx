import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Banner from "./components/banner";
import Home from "./pages/home";

function App() {
  return (
    <Router>
      <div>
        <Banner />

        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
