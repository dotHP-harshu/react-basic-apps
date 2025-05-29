import React from "react";

function Concepts({ conceptArray }) {
  if (conceptArray) {
    return (
      <div className="mt-6 w-full">
        <h1 className="w-fit p-2 lg:text-2xl sm:text-xl max-sm:text-lg font-semibold font-[heading] text-[var(--orange-color)] border-b-2 border-b-[var(--orange-color)] ">
          🚀 Used Concepts
        </h1>
        <ul className="pl-6 mb-2">
          {conceptArray.map((c, i) => (
            <li
              className="text-base max-sm:text-sm font-[paragraph] mt-2"
              key={i}
            >
              {c}
            </li>
          ))}
        </ul>
      </div>
    );
  }
  return "";
}

export default Concepts;
