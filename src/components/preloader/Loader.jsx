import React from "react";
import "./loader.css";

function Loader() {
  return (
    <div className="w-screen h-dvh bg-[var(--bg-color)] flex justify-center items-center">
      <div className="loader"></div>
    </div>
  );
}

export default Loader;
