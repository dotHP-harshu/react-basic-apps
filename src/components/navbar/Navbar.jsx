import React from "react";
import { Link, NavLink } from "react-router";

function Navbar({ isShowingNav }) {
  return (
    <div
      className={`${
        isShowingNav ? "left-2" : "-left-full"
      } w-fit px-4 py-4 bg-[var(--bg-color)] fixed top-20 transition-all duration-500 lg:text-xl sm:text-lg max-sm:text-base z-20`}
    >
      <div className={"flex flex-col gap-3 "}>
        <NavLink className="px-6 text-2xl font-bold " to={"/"}>
          Home
        </NavLink>
        <hr className="w-full" />
        <NavLink className="px-6" to={"/"}>
          Home
        </NavLink>
        <NavLink className="px-6" to={"/"}>
          Home
        </NavLink>
        <NavLink className="px-6" to={"/"}>
          Home
        </NavLink>
        <NavLink className="px-6" to={"/"}>
          Home
        </NavLink>
        <NavLink className="px-6" to={"/"}>
          Home
        </NavLink>
      </div>
    </div>
  );
}

export default Navbar;
