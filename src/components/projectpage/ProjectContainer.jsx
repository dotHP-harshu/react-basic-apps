import React from "react";
import VideoContainer from "./VideoContainer";
import AboutProject from "./AboutProject";
import Concepts from "./Concepts";
import Feature from "./Feature";
import Improvement from "./Improvement";
import CodeButton from "./CodeButton";

function ProjectContainer({
  title,
  src,
  aboutPara,
  conceptArray,
  featureArray,
  ImprovementArray,
  code,
}) {
  return (
    <main className="lg:mx-20 sm:mx-10 max-sm:mx-4 lg:px-10 sm:px-6 max-sm:px-4 py-6 bg-[var(--bg-color)] border-2 border-[var(--green-color)]">
      <h1 className="lg:text-4xl sm:text-2xl max-sm:text-lg font-bold font-mono">
        {title}
      </h1>

      <VideoContainer src={src} />

      <AboutProject aboutPara={aboutPara} />
      <Feature featureArray={featureArray} />
      <Concepts conceptArray={conceptArray} />
      <Improvement ImprovementArray={ImprovementArray} />
      <CodeButton code={code} />
    </main>
  );
}

export default ProjectContainer;
