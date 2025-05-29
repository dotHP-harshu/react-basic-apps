import React from "react";

function CodeButton({ code }) {
  return (
    <div className="w-full flex justify-end items-center mt-6 px-6  ">
      <a
        target="_blank"
        href={code}
        className="w-fit px-4 py-2 border-2 border-[var(--orange-color)] text-[var(--orange-color)] transition-colors duration-500 font-mono font-light tracking-widest hover:bg-[var(--orange-color)] hover:text-[var(--bg-color)] "
      >
        Code
      </a>
    </div>
  );
}

export default CodeButton;
