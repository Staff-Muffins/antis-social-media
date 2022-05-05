import React from "react";
import { Route, Routes } from "react-router-dom";

/* styles */
import "./assets/scss/main.scss";

/* navigation */
import Navigation from "./components/navigation";

/* pages */
import Analytic from "./components/pages/Analytic";
import Posts from "./components/pages/SocialMedia/Posts";
import Profile from "./components/pages/SocialMedia/Profile";
import Followers from "./components/pages/SocialMedia/Followers";
import Statistic from "./components/pages/SocialMedia/Statistic";

function App() {
  return (
    <div className="application-wrapper">
      <Navigation />
      <Routes>
        <Route path="/analytic" element={<Analytic />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/followers" element={<Followers />} />
        <Route path="/statistic" element={<Statistic />} />
      </Routes>
    </div>
  );
}

export default App;
