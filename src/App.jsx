import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//pages
import Video from "./pages/video";
import Upload from "./pages/upload";
import Splash from "./pages/splash";

function App() {
  const [showSplash, setShowSplash] = React.useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowSplash(false);
    }, 4000);
  }, []);

  return (
    <>
      {showSplash ? (
        <Splash />
      ) : (
        <Router>
          <Routes>
            <Route path="/" element={<Upload />} />
            <Route path="/video" element={<Video />} />
          </Routes>
        </Router>
      )}
    </>
  );
}

export default App;
