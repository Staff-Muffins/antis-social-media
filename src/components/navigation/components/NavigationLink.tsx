import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IDropdownItem } from "../../../models";
import { ArrowIcon } from "../../icons/Arrow";

export interface INavigationLink {
  to: string;
  title: string;
  active?: boolean;
  icon: JSX.Element | JSX.Element[];
  items?: IDropdownItem[];
}

const NavigationLink = ({
  title,
  to,
  icon,
  active,
  items,
}: INavigationLink) => {
  const [showDropdown, setShowDropdown] = useState<boolean>(false);
  const linkStyles = {
    fontWeight: active ? "700" : "600",
    color: active ? "#FFFFFF" : "#9394A1",
  };
  return (
    <div className="navigation-link-container">
      <div
        className="navigation-link"
        onClick={() => setShowDropdown(!showDropdown)}
      >
        {icon}
        <Link
          className="navigation-link-title"
          style={linkStyles}
          to={`/${to}`}
        >
          {title}
        </Link>
        {items ? (
          <ArrowIcon
            style={{
              transform: showDropdown ? "" : "rotate(180deg)",
              marginLeft: "20px",
              transition: "0.3s",
            }}
          />
        ) : (
          ""
        )}
      </div>
      {items ? (
        <ul className={`navigation-dropdown ${showDropdown ? "active" : ""}`}>
          {items.map((item) => (
            <li className={item.active ? "active" : ""}>
              <Link
                className="navigation-dropdown-link-title"
                style={linkStyles}
                to={`/${item.to}`}
                onClick={() => setShowDropdown(!showDropdown)}
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        ""
      )}
    </div>
  );
};

export default NavigationLink;
