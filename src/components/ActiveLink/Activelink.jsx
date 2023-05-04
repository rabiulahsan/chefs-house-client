/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import "./Activelink.css";
import React from "react";
import { NavLink } from "react-router-dom";

const Activelink = ({ to, children }) => {
  return (
    <div>
      <NavLink
        to={to}
        className={({ isActive }) =>
          isActive ? "active-text-style" : "text-style"
        }
      >
        {children}
      </NavLink>
    </div>
  );
};

export default Activelink;
