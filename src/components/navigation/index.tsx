import React from "react";
import { AnalyticIcon } from "../icons/Analytic";
import { LogoIcon } from "../icons/Logo";
import { MessageIcon } from "../icons/Message";
import { SettingsIcon } from "../icons/Settings";
import { SocialMediaIcon } from "../icons/SocialMedia";
import NavigationLink from "./components/NavigationLink";

const Navigation = () => {
  return (
    <div className="navigation-container">
      <div className="logo-container">
        <LogoIcon />
        <span className="logo-container-title">Antis</span>
      </div>
      <div className="navigation-links">
        <NavigationLink
          icon={<AnalyticIcon active />}
          title="Analytic"
          to="analytic"
          active
        />
        <NavigationLink
          icon={<SocialMediaIcon />}
          title="Social Media"
          to="analytic"
          items={[
            {
              title: "Posts",
              to: "posts",
            },
            {
              title: "Statistic",
              to: "statistic",
            },
            {
              title: "Profile",
              to: "profile",
            },
            {
              title: "Followers",
              to: "followers",
            },
          ]}
        />
        <NavigationLink icon={<MessageIcon />} title="Message" to="analytic" />
        <NavigationLink
          icon={<SettingsIcon />}
          title="Settings"
          to="analytic"
        />
      </div>
    </div>
  );
};

export default Navigation;
