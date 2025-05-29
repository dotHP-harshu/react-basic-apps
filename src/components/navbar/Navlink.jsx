import React from "react";
import { NavLink } from "react-router";

function Navlink({ name, route }) {
  return (
    <NavLink
      className={({ isActive }) => {
        return `font-bold px-6 text-lg max-sm:text-base ${
          isActive ? "font-bold" : "font-light"
        }`;
      }}
      to={route}
    >
      {name}
    </NavLink>
  );
}

export default Navlink;
