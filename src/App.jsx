import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//pages
import Video from "./pages/video";
import Upload from "./pages/upload";
import Splash from "./pages/splash";
import Loader from "./pages/loader";
import Subtitles from "./pages/subtitles";

//globals
import "react-circular-progressbar/dist/styles.css";

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
            <Route path="/subtitles" element={<Subtitles />} />
            <Route path="/generating" element={<Loader />} />
          </Routes>
        </Router>
      )}
    </>
  );
}

export default App;
