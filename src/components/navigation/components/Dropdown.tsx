import React from "react";
import { IDropdownItem } from "../../../models";

interface IProps {
  active: boolean;
  items: IDropdownItem[];
}

const Dropdown = ({ active, items }: IProps) => {
  return (
    <div className="dropdown-container">
      <ul className={active ? "active" : ""}>
        {items.map((item) => (
          <li>{item.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Dropdown;
