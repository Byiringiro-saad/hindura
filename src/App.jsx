import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//pages
import Upload from "./pages/upload";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Upload />} />
      </Routes>
    </Router>
  );
}

export default App;
