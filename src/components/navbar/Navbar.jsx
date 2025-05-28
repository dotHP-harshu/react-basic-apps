import React from "react";
import { Link, NavLink } from "react-router";

function Navbar({ isShowingNav }) {
  return (
    <div
      className={`${
        isShowingNav ? "left-2" : "-left-full"
      } w-fit px-4 py-4 bg-[var(--bg-color)] fixed top-20 transition-all duration-500 lg:text-xl sm:text-lg max-sm:text-base`}
    >
      <NavLink className={"flex flex-col gap-3 "}>
        <Link className="px-6 text-2xl font-bold " to={"/"}>
          Home
        </Link>
        <hr className="w-full" />
        <Link className="px-6" to={"/"}>
          Home
        </Link>
        <Link className="px-6" to={"/"}>
          Home
        </Link>
        <Link className="px-6" to={"/"}>
          Home
        </Link>
        <Link className="px-6" to={"/"}>
          Home
        </Link>
        <Link className="px-6" to={"/"}>
          Home
        </Link>
      </NavLink>
    </div>
  );
}

export default Navbar;
