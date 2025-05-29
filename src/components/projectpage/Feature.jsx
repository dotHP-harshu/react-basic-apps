import React from "react";

function Feature({ featureArray }) {
  if (featureArray) {
    return (
      <div className="mt-6 w-full">
        <h1 className="w-fit p-2 lg:text-2xl sm:text-xl max-sm:text-lg font-semibold font-[heading] text-[var(--green-color)] border-b-2 border-b-[var(--green-color)] ">
          🎨 Features
        </h1>
        <ul className="pl-6 mb-2">
          {featureArray.map((f, i) => (
            <li
              className="text-base max-sm:text-sm font-[paragraph] mt-2"
              key={i}
            >
              {f}
            </li>
          ))}
        </ul>
      </div>
    );
  }
  return "";
}

export default Feature;
