import React from "react";

function AboutProject({ aboutPara }) {
  if (aboutPara) {
    return (
      <div className="mt-6 w-full">
        <h1 className="w-fit p-2 lg:text-2xl sm:text-xl max-sm:text-lg font-semibold font-[heading] text-[var(--pink-color)] border-b-2 border-b-[var(--pink-color)] ">
          🏢 About the Project
        </h1>
        <p className="text-base max-sm:text-sm font-[paragraph] mt-6 pl-6">
          {aboutPara}
        </p>
      </div>
    );
  }
  return "";
}

export default AboutProject;
