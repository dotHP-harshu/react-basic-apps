import { NavLink } from "react-router";
import Navlink from "./Navlink";

function Navbar({ isShowingNav, navRef }) {
  return (
    <div
      ref={navRef}
      className={`${
        isShowingNav ? "left-2" : "-left-full"
      } w-fit px-4 py-4 bg-[var(--bg-color)] fixed top-20 transition-all duration-500 lg:text-xl sm:text-lg max-sm:text-base z-20`}
    >
      <div className={"flex flex-col gap-3 "}>
        <NavLink
          className={({ isActive }) => {
            return `font-bold px-6 text-2xl ${
              isActive ? "font-bold" : "font-light"
            }`;
          }}
          to={"/"}
        >
          Home
        </NavLink>
        <hr className="w-full" />
        <Navlink name={"Brand page"} route={"/brandpage"} />
        <Navlink name={"Character Counter"} route={"/charactercounter"} />
        <Navlink name={"Dice Game"} route={"/dicegame"} />
        <Navlink name={"Drag N Drop"} route={"/dragndrop"} />
        <Navlink name={"Login Page"} route={"/login"} />
        <Navlink name={"Markdown Converter"} route={"/markdownconverter"} />
        <Navlink name={"Mini cart"} route={"/minicart"} />
        <Navlink name={"Task Tracker"} route={"/tasktracker"} />
        <Navlink name={"Todos"} route={"/todos"} />
        <Navlink name={"Word to Numeric"} route={"/wordtonumeric"} />
      </div>
    </div>
  );
}

export default Navbar;
