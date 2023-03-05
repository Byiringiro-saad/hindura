import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Splash from "./pages/splash";

//pages
import Upload from "./pages/upload";

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
          </Routes>
        </Router>
      )}
    </>
  );
}

export default App;
