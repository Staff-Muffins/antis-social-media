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
import { ArrowIcon } from "./components/icons/Arrow";
import { NotificationsIcon } from "./components/icons/Notification";

function App() {
  return (
    <div className="application-wrapper">
      <Navigation />
      <div className="content-wrapper">
        <div className="herder">
          <NotificationsIcon />
          <div className="profile">
            <div className="profile-icon" />
            <span className="profile-nickname">Ferra Alexandra</span>
            <ArrowIcon style={{ transform: "rotate(180deg)" }} />
          </div>
        </div>
        <Routes>
          <Route path="/analytic" element={<Analytic />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/followers" element={<Followers />} />
          <Route path="/statistic" element={<Statistic />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
