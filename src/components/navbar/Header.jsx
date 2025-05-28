import React, { useState } from "react";
import { HiMenuAlt1 } from "react-icons/hi";
import Navbar from "./Navbar";
import { IoClose } from "react-icons/io5";

function Header() {
  const [isShowingNav, setIsShowingNav] = useState(false);

  const toggleMenu = () => {
    setIsShowingNav((prev) => !prev);
  };

  return (
    <div className="w-full flex justify-between items-center lg:px-10 sm:px-6 max-sm:px-2 min-h-16 bg-[var(--bg-color)]">
      <span
        onClick={toggleMenu}
        className="select-none relative h-10 w-10 max-sm:h-8 max-sm:w-8"
      >
        <HiMenuAlt1
          className={`${
            isShowingNav ? "opacity-0" : "opacity-100"
          } w-full h-full cursor-pointer max-sm:text-2xl absolute top-0 left-0 transition-all duration-500`}
        />
        <IoClose
          className={`${
            isShowingNav ? "opacity-100" : "opacity-0"
          } w-full h-full cursor-pointer max-sm:text-2xl absolute top-0 left-0 transition-all duration-500`}
        />
      </span>
      <a
        href="#"
        className="lg:text-2xl sm:text-xl max-sm:text-lg font-semibold"
      >
        DotHP
      </a>
      <Navbar isShowingNav={isShowingNav} />
    </div>
  );
}

export default Header;
