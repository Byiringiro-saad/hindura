import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//pages
import Edit from "./pages/edit";
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
            <Route path="/edit" element={<Edit />} />
            <Route path="/video" element={<Video />} />
            <Route path="/generating" element={<Loader />} />
            <Route path="/subtitles" element={<Subtitles />} />
          </Routes>
        </Router>
      )}
    </>
  );
}

export default App;
